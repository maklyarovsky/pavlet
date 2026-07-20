import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const sharp = require("sharp");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const imageDirectory = path.join(root, "assets", "images");
const dataPath = path.join(root, "data.js");
const ffmpeg = "/opt/homebrew/bin/ffmpeg";
let data = fs.readFileSync(dataPath, "utf8");
const removed = [];

function runFfmpeg(args) {
  const result = spawnSync(ffmpeg, ["-y", "-hide_banner", "-loglevel", "error", ...args], { stdio: "inherit" });
  if (result.status !== 0) throw new Error(`FFmpeg failed with status ${result.status}`);
}

const gifs = fs.readdirSync(imageDirectory).filter((name) => name.endsWith(".gif"));
for (const name of gifs) {
  const source = path.join(imageDirectory, name);
  const base = name.slice(0, -4);
  const videoName = `${base}.mp4`;
  const posterName = `${base}-poster.jpg`;
  const video = path.join(imageDirectory, videoName);
  const poster = path.join(imageDirectory, posterName);

  runFfmpeg([
    "-i", source,
    "-vf", "scale='min(1600,iw)':-2:flags=lanczos,fps=20",
    "-c:v", "libx264", "-preset", "slow", "-crf", "24",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an", video
  ]);
  runFfmpeg([
    "-i", source, "-frames:v", "1",
    "-vf", "scale='min(1600,iw)':-2:flags=lanczos",
    "-q:v", "3", poster
  ]);

  const asset = `assets/images/${name}`;
  const escapedAsset = asset.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  data = data.replace(
    new RegExp(`(image:\\s*\")${escapedAsset}(\")`, "g"),
    `$1assets/images/${posterName}$2`
  );
  data = data.replaceAll(`\"${asset}\"`, `\"assets/images/${videoName}\"`);
  removed.push(source);
}

const referencedAssets = new Set(
  [...data.matchAll(/"(assets\/images\/[^"?#]+\.(?:png|jpe?g))"/gi)].map((match) => match[1])
);

for (const asset of referencedAssets) {
  const source = path.join(root, asset);
  if (!fs.existsSync(source) || fs.statSync(source).size < 1_000_000) continue;

  const outputAsset = asset.replace(/\.(?:png|jpe?g)$/i, ".webp");
  const output = path.join(root, outputAsset);
  await sharp(source)
    .rotate()
    .resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 84, effort: 6, smartSubsample: true })
    .toFile(output);
  data = data.replaceAll(`\"${asset}\"`, `\"${outputAsset}\"`);
  removed.push(source);
}

fs.writeFileSync(dataPath, data);

for (const source of removed) {
  const relative = path.relative(root, source).split(path.sep).join("/");
  if (!data.includes(relative)) fs.unlinkSync(source);
}

console.log(`Converted ${gifs.length} animations and removed ${removed.length} heavy source files.`);
