const filters = document.querySelector("#filters");
const grid = document.querySelector("#workGrid");
const worksSection = document.querySelector("#works");
const aboutSection = document.querySelector("#about");
const initialRubric = new URLSearchParams(window.location.search).get("rubric");

let activeRubric = rubrics.some((rubric) => rubric.id === initialRubric) ? initialRubric : "all";

function categoryLabel(ids) {
  return ids.map((id) => rubrics.find((rubric) => rubric.id === id)?.title || id).join(" / ");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function workDisplayTitle(work) {
  return projectDetails[work.slug]?.title || work.title;
}

function projectUrl(slug) {
  return window.location.protocol === "file:"
    ? `project.html?slug=${encodeURIComponent(slug)}`
    : `/works/${encodeURIComponent(slug)}/`;
}

function renderFilters() {
  if (!filters) return;

  const buttons = [
    { id: "all", title: "all" },
    ...rubrics
  ];

  filters.innerHTML = buttons.map((rubric) => `
    <button class="filter ${activeRubric === rubric.id ? "active" : ""}" type="button" data-rubric="${rubric.id}">
      ${rubric.title}
    </button>
  `).join("");
}

function renderWorks() {
  const visible = activeRubric === "all"
    ? works
    : works.filter((work) => work.categories.includes(activeRubric));

  grid.innerHTML = visible.map((work) => `
    <article class="work-card">
      <a href="${escapeHtml(projectUrl(work.slug))}" aria-label="Open ${escapeHtml(workDisplayTitle(work))}">
        <img class="card-image" src="${escapeHtml(work.image)}" alt="${escapeHtml(workDisplayTitle(work))}" loading="lazy">
        <span class="work-meta">${escapeHtml(categoryLabel(work.categories))}</span>
        <h3>${escapeHtml(workDisplayTitle(work))}</h3>
        <svg class="arrow" viewBox="0 0 14 24" aria-hidden="true">
          <path d="M1 1l11 11L1 23" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
      </a>
    </article>
  `).join("");

  if (aboutSection) {
    aboutSection.hidden = activeRubric !== "all";
  }
}

function setRubric(rubric) {
  activeRubric = rubric;
  renderFilters();
  renderWorks();
}

if (filters) {
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-rubric]");
    if (!button) return;
    setRubric(button.dataset.rubric);
  });
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("[data-rubric-link]");
  if (!link) return;

  event.preventDefault();
  setRubric(link.dataset.rubricLink);
  worksSection?.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.addEventListener("click", (event) => {
  const link = event.target.closest(".contacts-link");
  if (!link || !aboutSection) return;

  event.preventDefault();
  setRubric("all");
  window.history.replaceState(null, "", `${window.location.pathname}#about`);
  window.requestAnimationFrame(() => {
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

renderFilters();
renderWorks();
