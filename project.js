const page = document.querySelector("#projectPage");
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");
const work = works.find((item) => item.slug === slug) || works[0];

function projectCategoryLabel(ids) {
  return ids.map((id) => rubrics.find((rubric) => rubric.id === id)?.title || id).join(" / ");
}

document.title = `Pavlet — ${work.title}`;

page.innerHTML = `
  <section class="project-hero">
    <div class="project-cover" style="--image: url('${work.image}')"></div>
    <div class="project-info">
      <a class="back-link" href="index.html#works">back to works</a>
      <p class="eyebrow">${projectCategoryLabel(work.categories)}</p>
      <h1>${work.title}</h1>
      <div class="project-actions">
        <a class="project-button" href="https://pavlet.ru/${work.slug}" rel="noopener">open original tilda page</a>
      </div>
    </div>
  </section>
  <section class="project-note">
    <p>This project page is now inside the new site. The original Tilda page remains linked while video embeds, credits and full descriptions are being migrated.</p>
  </section>
`;
