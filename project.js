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

const creditRoles = [
  "produced & directed by",
  "produced & directed",
  "director & DOP",
  "Director, DOP, concept",
  "DOP, director",
  "DOP, light, edit",
  "production assists",
  "produced by",
  "style assist",
  "set-design",
  "art direction",
  "makeup, hair",
  "photo",
  "style",
  "models",
  "model",
  "titles",
  "brands",
  "brand",
  "assist",
  "light",
  "video",
  "director",
  "producer and casting",
  "producer",
  "production",
  "prod",
  "dress",
  "mua",
  "muah",
  "gaffer",
  "media",
  "VFX"
];

function formatDescriptionLine(line) {
  let output = escapeHtml(line);

  creditRoles.forEach((role) => {
    const escapedRole = escapeHtml(role);
    const pattern = new RegExp(`(^|\\s)(${escapedRole.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})(?=\\s+(?:[A-ZА-ЯЁ]|&quot;|«))`, "g");
    output = output.replace(pattern, "$1<strong>$2</strong>");
  });

  output = output.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, (_, label, url) => {
    const linkLabel = label.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    return `<a href="${escapeHtml(url)}" rel="noopener">${linkLabel}</a>`;
  });

  return output;
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
      ${lines.map((line) => `<p>${formatDescriptionLine(line)}</p>`).join("")}
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
  const photoProject = (work.categories || []).includes("photo");
  const reelsProject = (work.categories || []).includes("reels");
  const wideGalleryItems = new Set(details.wideGalleryItems || []);

  return `
    <section class="project-gallery-section" aria-label="Project stills">
      <div class="project-gallery" data-count="${images.length}"${photoProject ? " data-photo-project=\"true\"" : ""}${reelsProject ? " data-reels-project=\"true\"" : ""}>
        ${images.map((image, index) => `
          <figure${wideGalleryItems.has(index) ? " data-wide=\"true\"" : ""}>
            <img src="${escapeHtml(image)}" alt="${escapeHtml(work.title)} still ${index + 1}" loading="lazy">
          </figure>
        `).join("")}
      </div>
    </section>
  `;
}

function relatedWorks() {
  const categorySet = new Set(work.categories || []);

  return works
    .filter((item) => item.slug !== work.slug)
    .map((item) => ({
      item,
      score: (item.categories || []).filter((category) => categorySet.has(category)).length
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ item }) => item);
}

function renderRelated() {
  const related = relatedWorks();
  if (!related.length) return "";

  return `
    <section class="related-projects" aria-label="Related projects">
      <div class="related-grid">
        ${related.map((item) => {
          const itemDetails = projectDetails[item.slug] || {};

          return `
            <article class="related-card">
              <a href="project.html?slug=${escapeHtml(item.slug)}">
                <img src="${escapeHtml(item.image)}" alt="${escapeHtml(itemDetails.title || item.title)}" loading="lazy">
                <div class="related-card-copy">
                  <p>${escapeHtml(projectCategoryLabel(item.categories))}</p>
                  <h3>${escapeHtml(itemDetails.title || item.title)}</h3>
                </div>
              </a>
            </article>
          `;
        }).join("")}
      </div>
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

function renderProjectActions() {
  const videoLinks = renderVideoLinks();
  if (!videoLinks) return "";

  return `
    <div class="project-actions">
      ${videoLinks}
    </div>
  `;
}

const title = details.title || work.title;
document.title = `Pavlet — ${title}`;

page.innerHTML = `
  <section class="project-hero">
    <a class="back-link" href="index.html#works">back to works</a>
    <div class="project-heading">
      <p class="eyebrow">${escapeHtml(projectCategoryLabel(work.categories))}</p>
      <h1>${escapeHtml(title)}</h1>
    </div>
  </section>
  ${renderVideo()}
  <section class="project-intro">
    ${renderDescription(details.description)}
    ${renderProjectActions()}
  </section>
  ${renderGallery()}
  ${renderRelated()}
`;
