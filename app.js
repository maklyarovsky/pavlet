const rubrics = [
  { id: "fashion", title: "fashion", note: "fashion films, campaigns, editorials" },
  { id: "music", title: "music", note: "music videos and live visual pieces" },
  { id: "commercials", title: "commercials", note: "brand films, social cuts, campaigns" },
  { id: "documentary", title: "documentary", note: "places, people, field stories" },
  { id: "videoart", title: "videoart", note: "art projects, AI, experimental images" }
];

const works = [
  { slug: "daena", title: "Daena", categories: ["fashion", "music", "videoart"], image: "https://static.tildacdn.com/tild6236-6535-4635-b730-393866346463/Screenshot_2024-08-0.png" },
  { slug: "elle", title: "Elle", categories: ["fashion", "commercials"], image: "https://static.tildacdn.com/tild3031-3938-4133-b433-653636303939/Screenshot_2024-01-1.png" },
  { slug: "noize", title: "Noize MC", categories: ["music"], image: "https://static.tildacdn.com/tild6462-3033-4062-a463-613033643365/Screenshot_2024-07-1.png" },
  { slug: "caspian", title: "Caspian", categories: ["documentary", "videoart"], image: "https://static.tildacdn.com/tild3039-3563-4361-b732-353662663031/Screenshot_2024-01-1.png" },
  { slug: "flat22", title: "Flat22", categories: ["fashion", "commercials"], image: "https://static.tildacdn.com/tild3663-6531-4565-b735-616131343961/Screenshot_2024-01-1.png" },
  { slug: "sildi", title: "Sildi", categories: ["documentary", "videoart"], image: "https://static.tildacdn.com/tild6333-3936-4861-b838-363435643636/Screenshot_2024-01-1.png" },
  { slug: "zabit", title: "Zabit", categories: ["commercials", "documentary"], image: "https://static.tildacdn.com/tild3532-3766-4037-b635-316162366533/Screenshot_2024-07-2.png" },
  { slug: "measureanji", title: "Measure Anji", categories: ["commercials", "documentary"], image: "https://static.tildacdn.com/tild3732-3331-4230-a132-353862303734/Screenshot_2025-03-0.png" },
  { slug: "donutsday", title: "Donuts Day", categories: ["commercials"], image: "https://static.tildacdn.com/tild3234-6436-4337-b239-633462303365/Screenshot_2026-03-2.jpg" },
  { slug: "wayhome", title: "Way Home", categories: ["documentary", "videoart"], image: "https://static.tildacdn.com/tild3630-3834-4437-b863-633330393831/Screenshot_2024-01-1.png" },
  { slug: "alice", title: "Alice", categories: ["fashion", "videoart"], image: "https://static.tildacdn.com/tild6434-6562-4533-b238-353066663564/Screenshot_2024-01-2.png" },
  { slug: "dagestan", title: "Dagestan", categories: ["documentary"], image: "https://static.tildacdn.com/tild3232-3932-4237-b830-666435363430/Screenshot_2024-01-1.png" },
  { slug: "pankisi", title: "Pankisi", categories: ["documentary", "music"], image: "https://static.tildacdn.com/tild6230-6636-4161-b437-363831663864/Screenshot_2024-02-2.png" },
  { slug: "qhuaua", title: "Qhuaua", categories: ["music", "documentary"], image: "https://static.tildacdn.com/tild3661-6232-4561-a365-306661636365/IMG_6344_copy.jpg" },
  { slug: "followmeto", title: "Follow Me To", categories: ["commercials", "fashion"], image: "https://static.tildacdn.com/tild3633-3066-4133-a432-653561366232/222.jpg" },
  { slug: "madeinmilan", title: "Made in Milan", categories: ["fashion", "commercials"], image: "https://static.tildacdn.com/tild6366-3330-4261-a135-303038373535/IMG_6357_copy.jpg" },
  { slug: "subay", title: "Subay", categories: ["documentary", "music"], image: "https://static.tildacdn.com/tild6234-6631-4133-a563-373964386234/Screenshot_2024-01-1.png" },
  { slug: "tbilisi", title: "Tbilisi", categories: ["documentary", "videoart"], image: "https://static.tildacdn.com/tild3263-3265-4034-b131-396538363936/Screenshot_2024-01-2.png" },
  { slug: "daydreaming", title: "Daydreaming", categories: ["videoart", "fashion"], image: "https://static.tildacdn.com/tild3337-3932-4138-b031-623461643534/Screenshot_2024-01-2.png" },
  { slug: "watercolor", title: "Watercolor", categories: ["videoart", "fashion"], image: "https://static.tildacdn.com/tild6537-6637-4863-b030-376239343132/Screenshot_2024-01-2.png" },
  { slug: "karmel", title: "Karmel", categories: ["fashion", "commercials"], image: "https://static.tildacdn.com/tild6437-3039-4134-b764-303637626461/4r4r4r.jpg" },
  { slug: "tole", title: "Tole", categories: ["music", "documentary"], image: "https://static.tildacdn.com/tild6162-6234-4439-a262-356662373532/Screenshot_2024-07-2.png" },
  { slug: "flowers", title: "Flowers", categories: ["videoart", "fashion"], image: "https://static.tildacdn.com/tild3863-3366-4738-a361-343539383231/Screenshot_2024-07-2.png" },
  { slug: "chanel", title: "Chanel", categories: ["fashion", "commercials"], image: "https://static.tildacdn.com/tild3338-3538-4163-a539-373138663337/Screenshot_2024-07-2.jpg" },
  { slug: "mavlet", title: "Mavlet", categories: ["music"], image: "https://static.tildacdn.com/tild3037-3133-4462-a461-623736366536/Screenshot_2024-07-2.jpg" },
  { slug: "std", title: "STD", categories: ["commercials", "fashion"], image: "https://static.tildacdn.com/tild3266-3533-4439-b037-333762373165/5t5t.jpg" },
  { slug: "buro", title: "Buro", categories: ["fashion", "commercials"], image: "https://static.tildacdn.com/tild6563-3337-4266-a366-666331383734/6y6y.jpg" },
  { slug: "geegun", title: "Geegun", categories: ["music", "commercials"], image: "https://static.tildacdn.com/tild6265-3635-4539-a530-373934313038/7u7u.jpg" },
  { slug: "moonka", title: "Moonka", categories: ["music", "videoart"], image: "https://static.tildacdn.com/tild3739-6231-4465-b331-383131303133/Screenshot_2024-07-2.png" }
];

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
      <a href="https://pavlet.ru/${work.slug}" aria-label="Open ${work.title}">
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
