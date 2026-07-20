import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const domain = "https://maklyarovsky.com";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function plainText(value) {
  return String(value ?? "")
    .replace(/\[\*\*([^*]+)\*\*\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function descriptionFor(work, details) {
  const source = plainText(details.description);
  const fallback = `${details.title || work.title} — a project by Pavel Maklyarovsky.`;
  const text = source || fallback;
  return text.length > 158 ? `${text.slice(0, 155).replace(/\s+\S*$/, "")}…` : text;
}

function absoluteImage(image) {
  if (!image) return `${domain}/assets/images/og-image.png`;
  if (/^https?:\/\//.test(image)) return image.replace(/^http:/, "https:");
  return `${domain}/${image.replace(/^\/+/, "")}`;
}

const source = fs.readFileSync(path.join(root, "data.js"), "utf8");
const sandbox = {};
vm.runInNewContext(`${source}\nthis.__portfolio = { rubrics, works, projectDetails };`, sandbox);
const { works, projectDetails } = sandbox.__portfolio;
const template = fs.readFileSync(path.join(root, "project.html"), "utf8");

const worksRoot = path.join(root, "works");
fs.mkdirSync(worksRoot, { recursive: true });

for (const work of works) {
  const details = projectDetails[work.slug] || {};
  const title = details.title || work.title;
  const description = descriptionFor(work, details);
  const url = `${domain}/works/${work.slug}/`;
  const image = absoluteImage(work.image);
  const headMeta = [
    `  <base href="../../">`,
    `  <link rel="canonical" href="${escapeHtml(url)}">`,
    `  <meta property="og:title" content="${escapeHtml(`${title} — Pavel Maklyarovsky`)}">`,
    `  <meta property="og:description" content="${escapeHtml(description)}">`,
    `  <meta property="og:url" content="${escapeHtml(url)}">`,
    `  <meta property="og:image" content="${escapeHtml(image)}">`,
    `  <meta name="twitter:card" content="summary_large_image">`,
    `  <meta name="twitter:title" content="${escapeHtml(`${title} — Pavel Maklyarovsky`)}">`,
    `  <meta name="twitter:description" content="${escapeHtml(description)}">`,
    `  <meta name="twitter:image" content="${escapeHtml(image)}">`
  ].join("\n");

  const html = template
    .replace("  <title>Pavlet — project</title>", `  <title>${escapeHtml(title)} — Pavel Maklyarovsky</title>`)
    .replace("  <meta name=\"description\" content=\"Project page from Pavel Maklyarovsky's video portfolio.\">", `  <meta name="description" content="${escapeHtml(description)}">`)
    .replace("  <meta name=\"robots\" content=\"noindex,follow\">\n", "")
    .replace("  <meta property=\"og:type\" content=\"website\">", `${headMeta}\n  <meta property="og:type" content="article">`)
    .replace("<body>", `<body data-project-slug="${escapeHtml(work.slug)}">`);

  const directory = path.join(worksRoot, work.slug);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, "index.html"), html);
}

const sitemapUrls = [
  `${domain}/`,
  ...works.map((work) => `${domain}/works/${work.slug}/`)
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((url) => `  <url><loc>${escapeHtml(url)}</loc></url>`).join("\n")}\n</urlset>\n`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${domain}/sitemap.xml\n`);

console.log(`Generated ${works.length} project pages, sitemap.xml and robots.txt.`);
