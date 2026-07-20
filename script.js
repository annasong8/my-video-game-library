/* Data for the gallery categories and games */
const allGames = [
  {
    title: "Little Nightmares I and II",
    description: "The first 2 games in the Little Nightmares series, where you play as children stuck in a twisted world full of monsters, trying to escape.",
    labels: ["stormy night", "horror", "adventure", "puzzle", "high stakes"],
    cover: "Cover: little nightmares I and II",
    image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/bundles/25271/nboxijj9ujz7ax4c/page_bg_raw.jpg?t=1775738129",
    gameplayImages: [
      "https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/8382105/ss_8100f5db18a37496396985b1aeedf308bc2a9f46.1920x1080.jpg?q=50&fit=crop&w=825&dpr=1.5",
      "https://gamingbolt.com/wp-content/uploads/2019/08/little-nightmares-2-1.jpg"
    ]
  },
  {
    title: "Bugsnax",
    description: "A whimsical game where you explore an island, collect the cute creatures on it, and befriend the residents there.",
    labels: ["cozy", "collection", "low stakes", "adventure"],
    cover: "Cover: Bugsnax",
    image: "https://m.media-amazon.com/images/M/MV5BMjI4ODg1ZWQtNjYxMi00NzBlLWFiM2QtMWY2NTMyZmUwMjkzXkEyXkFqcGc@._V1_.jpg",
    gameplayImages: [
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/bugsnax/0/0b/Bugsnax_Screenshot_2022.05.21_-_17.18.31.08.png?width=814&dpr=2&format=jpg&auto=webp&quality=80",
      "https://media.wired.com/photos/625f40e9fde84d2a751f4daf/3:2/w_1920,c_limit/Bugsnax-Casual-Gamer-Games.png"
    ]
  },
  {
    title: "Omori",
    description: "A game where you play as a reclusive teenage boy who explores a strange world and uncovers his traumatic past.",
    labels: ["RPG", "psychological horror", "emotional", "medium stakes"],
    cover: "Cover: Omori",
    image: "https://cdn.mobygames.com/covers/10784724-omori-playstation-4-front-cover.jpg",
    gameplayImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-0joMEfWDX16EfKVG8Ia7N6m7DWcUdSqU-Vkvw0eGk6UiJfyW6mZFi8&s=10",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGD60BjFATRjSgsJIt5zvE-lkflsBccW5RenE6HSuitjdb6CZ82u0hIvk&s=10"
    ]
  },
  {
    title: "Cris Tales",
    description: "A time-traveling role-playing game where you play as a young girl who can see the past, present, and future.",
    labels: ["cozy", "RPG", "high stakes"],
    cover: "Cover: CrisTales",
    image: "https://static.wikia.nocookie.net/cristales/images/b/b8/Cristalesposter.jpeg/revision/latest?cb=20200621143118",
    gameplayImages: [
      "https://i0.wp.com/noescapevg.com/wp-content/uploads/2021/02/F648326B-6E8A-4ED4-BE2B-1C9A5148144A.jpeg?fit=1200%2C675&ssl=1",
      "https://cdn.wccftech.com/wp-content/uploads/2021/06/WCCFcristales5.jpg"
    ]
  },
  {
    title: "Final Fantasy 7 Remake & Rebirth",
    description: "The first 2 games in the reimagined trilogy of the original famous JRPG, where you play as a mercenary who joins an organization to stop a megacorporation from draining the life of the planet, but the journey escalates into pursuing a dangerous superhuman.",
    labels: ["high stakes", "RPG", "action"],
    cover: "Cover: Final Fantasy 7 Remake & Rebirth",
    image: "https://cdn11.bigcommerce.com/s-6rs11v9w2d/images/stencil/1280x1280/products/3054/16401/FFVII_RB_AG_US__55522.1709208257.jpg?c=1",
    gameplayImages: [
      "https://cdn.mos.cms.futurecdn.net/gyZZVNX2wjUs4FQXU5pffB.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIZqMxod6W8Hz6f2OT03OdJCInto4dKj7rd-p5IOwZ3e0UgoziGaOBe5Jg&s=10"
    ]
  }
];

const galleryData = {
  all: allGames,
  difficulty: {
    title: "Based on difficulty / stakes",
    groups: [
      {
        name: "🟢 Easy and low-stakes",
        games: [allGames[1]]
      },
      {
        name: "🟡 Medium challenge",
        games: [allGames[2]]
      },
      {
        name: "🔴 High stakes and difficulty",
        games: [allGames[0], allGames[3], allGames[4]]
      }
    ]
  },
  ambience: {
    title: "Based on ambience",
    groups: [
      {
        name: "🧸 Cozy and warm",
        games: [allGames[1], allGames[3]]
      },
      {
        name: "🌃 Dramatic and dark",
        games: [allGames[0], allGames[4]]
      },
      {
        name: "🌀 Surreal and mysterious",
        games: [allGames[0], allGames[2]]
      }
    ]
  },
  mood: {
    title: "Based on mood",
    groups: [
      {
        name: "🌌 Reality and time bending",
        games: [allGames[0], allGames[3], allGames[4]]
      },
      {
        name: "❤️‍🩹 Emotional and introspective",
        games: [allGames[2]]
      },
      {
        name: "✨ Fun and whimsical",
        games: [allGames[1]]
      }
    ]
  },
  genre: {
    title: "Based on genre",
    groups: [
      {
        name: "🕸️ Horror",
        games: [allGames[0], allGames[2]]
      },
      {
        name: "🎲 Role-playing (RPG)",
        games: [allGames[2], allGames[3], allGames[4]]
      },
      {
        name: "🧺 Collection-based",
        games: [allGames[1]]
      },
      {
        name: "🗺️ Adventure",
        games: [allGames[0], allGames[1], allGames[2]]
      }
    ]
  }
};

const categories = [
  { id: "all", label: "All" },
  { id: "difficulty", label: "Based on difficulty / stakes" },
  { id: "ambience", label: "Based on ambience" },
  { id: "mood", label: "Based on mood" },
  { id: "genre", label: "Based on genre" }
];

const galleryContent = document.getElementById("galleryContent");
const categoryButtons = document.getElementById("categoryButtons");
const activeCategoryNote = document.getElementById("activeCategoryNote");
const navButtons = document.querySelectorAll(".site-nav button");
const panels = document.querySelectorAll(".panel");

/* Render the category buttons for the gallery */
function renderCategoryButtons() {
  categories.forEach((category, index) => {
    const button = document.createElement("button");
    button.className = "category-button";
    button.textContent = category.label;
    button.dataset.category = category.id;
    if (index === 0) button.classList.add("active");
    button.addEventListener("click", () => selectCategory(category.id));
    categoryButtons.appendChild(button);
  });
}

/* Select a category and update the gallery content */
function selectCategory(categoryId) {
  document.querySelectorAll(".category-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.category === categoryId);
  });

  if (categoryId === "all") {
    activeCategoryNote.textContent = "Showing all games.";
    renderAllGames();
  } else {
    activeCategoryNote.textContent = `Showing ${galleryData[categoryId].title.toLowerCase()}.`;
    renderCategoryGroups(galleryData[categoryId]);
  }
}

/* Create a game card element for one game */
function createGameCard(game) {
  const card = document.createElement("article");
  card.className = "game-card";
  card.innerHTML = `
    <h4>${game.title}</h4>
    <p>${game.description}</p>
    <div class="game-badges">
      ${game.labels.map((label) => `<span class="badge">${label}</span>`).join("")}
    </div>
    <div class="image-row">
      <div class="image-placeholder cover-tile">
        ${game.image ? `<img src="${game.image}" alt="${game.title} cover" class="game-image" />` : game.cover}
      </div>
      <div class="image-row double-stack">
        ${game.gameplayImages ? game.gameplayImages.map((src) => `
          <div class="image-placeholder gameplay-tile">
            <img src="${src}" alt="${game.title} gameplay" class="game-image" />
          </div>
        `).join("") : `<div class="image-placeholder gameplay-tile">${game.gameplay.join(" | ")}</div>`}
      </div>
    </div>
  `;
  return card;
}

/* Show all games in one list */
function renderAllGames() {
  galleryContent.innerHTML = "";
  const list = document.createElement("div");
  list.className = "game-grid";
  galleryData.all.forEach((game) => {
    list.appendChild(createGameCard(game));
  });
  galleryContent.appendChild(list);
}

function createSectionId(groupName) {
  return `group-${groupName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

/* Show groups inside a selected category */
function renderCategoryGroups(categoryData) {
  galleryContent.innerHTML = "";

  const layout = document.createElement("div");
  layout.className = "gallery-layout";

  const sidebar = document.createElement("aside");
  sidebar.className = "subcategory-sidebar";

  const sidebarTitle = document.createElement("h4");
  sidebarTitle.textContent = "Subcategories";
  sidebar.appendChild(sidebarTitle);

  const list = document.createElement("div");
  list.className = "subcategory-list";

  const content = document.createElement("div");
  content.className = "category-content";

  categoryData.groups.forEach((group) => {
    const sectionId = createSectionId(group.name);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "subcategory-button";
    button.textContent = group.name;
    button.addEventListener("click", () => {
      const target = document.getElementById(sectionId);
      if (target) {
        const top = target.getBoundingClientRect().top + window.pageYOffset - 110;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
    list.appendChild(button);

    const block = document.createElement("section");
    block.className = "category-block";
    block.id = sectionId;

    const heading = document.createElement("h3");
    heading.textContent = group.name;
    block.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "game-grid";
    group.games.forEach((game) => {
      grid.appendChild(createGameCard(game));
    });

    block.appendChild(grid);
    content.appendChild(block);
  });

  sidebar.appendChild(list);
  layout.appendChild(sidebar);
  layout.appendChild(content);
  galleryContent.appendChild(layout);
}

/* Set up top navigation buttons */
function setupNavigation() {
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      panels.forEach((panel) => {
        panel.classList.toggle("active-panel", panel.id === targetId);
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

/* Initialize the page */
function init() {
  renderCategoryButtons();
  setupNavigation();
  selectCategory("all");
}

init();
