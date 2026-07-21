const filters = document.querySelector("#filters");
const grid = document.querySelector("#workGrid");
const worksSection = document.querySelector("#works");
const aboutSection = document.querySelector("#about");
const initialRubric = new URLSearchParams(window.location.search).get("rubric");

let activeRubric = rubrics.some((rubric) => rubric.id === initialRubric) ? initialRubric : "all";
let cardVideoObserver;

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

function workMediaMarkup(work, index) {
  const title = escapeHtml(workDisplayTitle(work));
  const poster = escapeHtml(work.image);

  if (work.preview) {
    return `
      <video class="card-image card-video" poster="${poster}" muted loop playsinline preload="none" aria-hidden="true">
        <source src="${escapeHtml(work.preview)}" type="video/mp4">
      </video>
    `;
  }

  return `<img class="card-image" src="${poster}" alt="${title}" ${index === 0 ? "fetchpriority=\"high\"" : "loading=\"lazy\""} decoding="async">`;
}

function initCardVideos() {
  cardVideoObserver?.disconnect();
  cardVideoObserver = undefined;

  const videos = [...grid.querySelectorAll(".card-video")];
  if (!videos.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  if (!("IntersectionObserver" in window)) {
    videos.forEach((video) => video.play().catch(() => {}));
    return;
  }

  cardVideoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.25, rootMargin: "100px 0px" });

  videos.forEach((video) => cardVideoObserver.observe(video));
}

function renderFilters() {
  if (!filters) return;

  const buttons = [
    { id: "all", title: "all" },
    ...rubrics
  ];

  filters.innerHTML = buttons.map((rubric) => `
    <button class="filter ${activeRubric === rubric.id ? "active" : ""}" type="button" data-rubric="${rubric.id}" aria-pressed="${activeRubric === rubric.id}">
      ${rubric.title}
    </button>
  `).join("");
}

function renderWorks() {
  const visible = activeRubric === "all"
    ? works
    : works.filter((work) => work.categories.includes(activeRubric));

  grid.innerHTML = visible.map((work, index) => `
    <article class="work-card">
      <a href="${escapeHtml(projectUrl(work.slug))}" aria-label="Open ${escapeHtml(workDisplayTitle(work))}">
        ${workMediaMarkup(work, index)}
        <span class="work-meta">${escapeHtml(categoryLabel(work.categories))}</span>
        <h3>${escapeHtml(workDisplayTitle(work))}</h3>
        <svg class="arrow" viewBox="0 0 14 24" aria-hidden="true">
          <path d="M1 1l11 11L1 23" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
      </a>
    </article>
  `).join("");

  initCardVideos();

  if (aboutSection) {
    aboutSection.hidden = activeRubric !== "all";
  }
}

function setRubric(rubric) {
  activeRubric = rubric;
  renderFilters();
  renderWorks();
  document.querySelectorAll("[data-rubric-link]").forEach((link) => {
    if (link.dataset.rubricLink === activeRubric) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
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

setRubric(activeRubric);
