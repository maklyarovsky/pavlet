import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const sharp = require("sharp");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "data.js");
const outputDirectory = path.join(root, "assets", "legacy");
const sourcePattern = /https:\/\/static\.tildacdn\.com\/[^"')\s]+/g;
let data = fs.readFileSync(dataPath, "utf8");
const urls = [...new Set(data.match(sourcePattern) || [])];

fs.mkdirSync(outputDirectory, { recursive: true });

function localAssetFor(url) {
  const hash = crypto.createHash("sha256").update(url).digest("hex").slice(0, 20);
  return `assets/legacy/${hash}.webp`;
}

async function fetchWithRetry(url, attempts = 3) {
  let lastError;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 Pavlet portfolio asset migration" }
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const type = response.headers.get("content-type") || "";
      if (!type.startsWith("image/")) throw new Error(`Unexpected content type: ${type || "unknown"}`);
      return Buffer.from(await response.arrayBuffer());
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, attempt * 600));
    }
  }

  throw lastError;
}

let completed = 0;
const failures = [];

async function localize(url) {
  const localAsset = localAssetFor(url);
  const outputPath = path.join(root, localAsset);

  try {
    if (!fs.existsSync(outputPath)) {
      const input = await fetchWithRetry(url);
      await sharp(input, { failOn: "warning" })
        .rotate()
        .resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true })
        .webp({ quality: 84, effort: 6, smartSubsample: true })
        .toFile(outputPath);
    }
    data = data.replaceAll(url, localAsset);
    completed += 1;
    if (completed % 20 === 0 || completed === urls.length) {
      console.log(`Localized ${completed}/${urls.length}`);
    }
  } catch (error) {
    failures.push({ url, message: error.message });
  }
}

const queue = [...urls];
const workers = Array.from({ length: 5 }, async () => {
  while (queue.length) {
    const url = queue.shift();
    await localize(url);
  }
});

await Promise.all(workers);

if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exitCode = 1;
} else {
  fs.writeFileSync(dataPath, data);
  console.log(`Localized all ${urls.length} Tilda assets.`);
}
