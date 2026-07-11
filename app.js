const filters = document.querySelector("#filters");
const grid = document.querySelector("#workGrid");
const rubricGrid = document.querySelector("#rubricGrid");

let activeRubric = "all";

function categoryLabel(ids) {
  return ids.map((id) => rubrics.find((rubric) => rubric.id === id)?.title || id).join(" / ");
}

function renderFilters() {
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
    <article class="work-card" style="--image: url('${work.image}')">
      <a href="project.html?slug=${work.slug}" aria-label="Open ${work.title}">
        <span class="work-meta">${categoryLabel(work.categories)}</span>
        <h3>${work.title}</h3>
        <svg class="arrow" viewBox="0 0 14 24" aria-hidden="true">
          <path d="M1 1l11 11L1 23" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
      </a>
    </article>
  `).join("");
}

function renderRubrics() {
  rubricGrid.innerHTML = rubrics.map((rubric) => {
    const items = works.filter((work) => work.categories.includes(rubric.id));
    const cover = items[0];

    return `
      <section class="rubric-card" id="${rubric.id}" style="--image: url('${cover.image}')">
        <a href="#works" data-rubric-link="${rubric.id}">
          <span>${items.length} works</span>
          <h2>${rubric.title}</h2>
          <p>${rubric.note}</p>
        </a>
      </section>
    `;
  }).join("");
}

function setRubric(rubric) {
  activeRubric = rubric;
  renderFilters();
  renderWorks();
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-rubric]");
  if (!button) return;
  setRubric(button.dataset.rubric);
});

rubricGrid.addEventListener("click", (event) => {
  const link = event.target.closest("[data-rubric-link]");
  if (!link) return;
  setRubric(link.dataset.rubricLink);
});

renderFilters();
renderWorks();
renderRubrics();
