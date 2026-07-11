const page = document.querySelector("#projectPage");
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const work = works.find((item) => item.slug === slug) || works[0];
const details = projectDetails[work.slug] || {};

function projectCategoryLabel(ids) {
  return ids.map((id) => rubrics.find((rubric) => rubric.id === id)?.title || id).join(" / ");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizeEmbed(url) {
  if (!url) return "";
  return url.replace(/^http:/, "https:");
}

function renderDescription(text) {
  const lines = String(text || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) return "";

  return `
    <div class="project-description">
      ${lines.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
    </div>
  `;
}

function renderVideo() {
  const embed = normalizeEmbed(details.embeds?.[0]);
  if (!embed) return "";

  return `
    <section class="project-video" aria-label="Project video">
      <iframe
        src="${escapeHtml(embed)}"
        title="${escapeHtml(details.title || work.title)} video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        loading="lazy"></iframe>
    </section>
  `;
}

function renderGallery() {
  const images = (details.gallery || []).filter(Boolean);
  if (!images.length) return "";

  return `
    <section class="project-gallery" aria-label="Project stills">
      ${images.map((image, index) => `
        <figure>
          <img src="${escapeHtml(image)}" alt="${escapeHtml(work.title)} still ${index + 1}" loading="lazy">
        </figure>
      `).join("")}
    </section>
  `;
}

function renderVideoLinks() {
  const links = (details.videoLinks || []).filter(Boolean);
  if (!links.length) return "";

  return `
    <div class="project-links">
      ${links.map((link) => `<a class="project-button" href="${escapeHtml(link)}" rel="noopener">watch source</a>`).join("")}
    </div>
  `;
}

const title = details.title || work.title;
document.title = `Pavlet — ${title}`;

page.innerHTML = `
  <section class="project-intro">
    <a class="back-link" href="index.html#works">back to works</a>
    <div class="project-heading">
      <p class="eyebrow">${escapeHtml(projectCategoryLabel(work.categories))}</p>
      <h1>${escapeHtml(title)}</h1>
    </div>
    ${renderDescription(details.description)}
    <div class="project-actions">
      <a class="project-button" href="${escapeHtml(details.originalUrl || `https://pavlet.ru/${work.slug}`)}" rel="noopener">original page</a>
      ${renderVideoLinks()}
    </div>
  </section>
  ${renderVideo()}
  ${renderGallery()}
`;
