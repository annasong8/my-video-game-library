/* Data for the gallery categories and games */
const allGames = [
  {
    title: "Stormy Night Runner",
    description: "A moody game for rainy nights and late-hour decisions.",
    labels: ["stormy night", "mood", "chill"],
    cover: "Cover: rainy city chase",
    gameplay: ["Neon street run", "Thunderstorm path"]
  },
  {
    title: "High Stakes Heist",
    description: "A high-energy challenge with strategy, timing, and tension.",
    labels: ["high stakes", "strategy", "action"],
    cover: "Cover: heist planning",
    gameplay: ["Vault escape", "Stealth move"]
  },
  {
    title: "Cozy Campfire Quest",
    description: "A relaxing adventure that feels warm and story-driven.",
    labels: ["cozy", "story", "adventure"],
    cover: "Cover: campfire evening",
    gameplay: ["Forest walk", "Character talk"]
  },
  {
    title: "Puzzle Room Retreat",
    description: "A calm puzzle game for thoughtful, low-key evenings.",
    labels: ["ambience", "easygoing", "mindful"],
    cover: "Cover: quiet study",
    gameplay: ["Brain puzzle", "Soft music"]
  }
];

const galleryData = {
  all: allGames,
  difficulty: {
    title: "Based on difficulty / stakes",
    groups: [
      {
        name: "Easy and relaxing",
        games: [allGames[2], allGames[3]]
      },
      {
        name: "Medium challenge",
        games: [allGames[0]]
      },
      {
        name: "High tension",
        games: [allGames[1]]
      }
    ]
  },
  ambience: {
    title: "Based on ambience",
    groups: [
      {
        name: "Cozy and warm",
        games: [allGames[2], allGames[3]]
      },
      {
        name: "Dramatic and moody",
        games: [allGames[0], allGames[1]]
      }
    ]
  },
  mood: {
    title: "Based on mood",
    groups: [
      {
        name: "Relaxed reading night",
        games: [allGames[2], allGames[3]]
      },
      {
        name: "Stormy night energy",
        games: [allGames[0]]
      },
      {
        name: "Challenge seeker",
        games: [allGames[1]]
      }
    ]
  }
};

const categories = [
  { id: "all", label: "All" },
  { id: "difficulty", label: "Based on difficulty / stakes" },
  { id: "ambience", label: "Based on ambience" },
  { id: "mood", label: "Based on mood" }
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
      <div class="image-placeholder cover-tile">${game.cover}</div>
      <div class="image-placeholder gameplay-tile">${game.gameplay.join(" | ")}</div>
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

/* Show groups inside a selected category */
function renderCategoryGroups(categoryData) {
  galleryContent.innerHTML = "";
  categoryData.groups.forEach((group) => {
    const block = document.createElement("section");
    block.className = "category-block";

    const heading = document.createElement("h3");
    heading.textContent = group.name;
    block.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "game-grid";
    group.games.forEach((game) => {
      grid.appendChild(createGameCard(game));
    });

    block.appendChild(grid);
    galleryContent.appendChild(block);
  });
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
