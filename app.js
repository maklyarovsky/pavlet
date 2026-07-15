const filters = document.querySelector("#filters");
const grid = document.querySelector("#workGrid");
const rubricGrid = document.querySelector("#rubricGrid");

let activeRubric = "all";

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
      <a href="project.html?slug=${escapeHtml(work.slug)}" aria-label="Open ${escapeHtml(workDisplayTitle(work))}">
        <img class="card-image" src="${escapeHtml(work.image)}" alt="${escapeHtml(workDisplayTitle(work))}" loading="lazy">
        <span class="work-meta">${escapeHtml(categoryLabel(work.categories))}</span>
        <h3>${escapeHtml(workDisplayTitle(work))}</h3>
        <svg class="arrow" viewBox="0 0 14 24" aria-hidden="true">
          <path d="M1 1l11 11L1 23" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
      </a>
    </article>
  `).join("");
}

function renderRubrics() {
  rubricGrid.innerHTML = rubrics.map((rubric) => `
    <a class="rubric-tab" href="#works" data-rubric-link="${escapeHtml(rubric.id)}" id="${escapeHtml(rubric.id)}">
      ${escapeHtml(rubric.title)}
    </a>
  `).join("");
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

rubricGrid.addEventListener("click", (event) => {
  const link = event.target.closest("[data-rubric-link]");
  if (!link) return;
  setRubric(link.dataset.rubricLink);
});

renderFilters();
renderWorks();
renderRubrics();
