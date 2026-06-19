const globalCompanyVisuals = {
  "OpenAI": {
    logo: "assets/images/companies/openai-logo.jpg",
    alt: "OpenAI logo"
  },
  "Google DeepMind": {
    logo: "assets/images/companies/deepmind-logo.jpg",
    alt: "Google DeepMind logo"
  },
  "xAI": {
    logo: "assets/images/companies/xai-logo.jpg",
    alt: "xAI logo"
  },
  "Mistral AI": {
    logo: "assets/images/companies/mistral-logo.jpg",
    alt: "Mistral AI logo"
  }
};

function createCompanyLogo(name) {
  const visual = globalCompanyVisuals[name];
  if (!visual) return null;

  const wrapper = document.createElement("div");
  wrapper.className = "company-logo-wrap";
  wrapper.innerHTML = `<img class="company-logo" src="${visual.logo}" alt="${visual.alt}" onerror="this.closest('.company-logo-wrap').style.display='none'" />`;
  return wrapper;
}

function enhanceExistingCompanyCards() {
  document.querySelectorAll("#globalCompaniesGrid .card").forEach((card) => {
    if (card.dataset.logoEnhanced === "true") return;
    const title = card.querySelector("h3")?.textContent?.trim();
    const logo = createCompanyLogo(title);
    if (logo) card.prepend(logo);
    card.classList.add("company-card");
    card.dataset.logoEnhanced = "true";
  });
}

function updateGlobalCompaniesPage() {
  const grid = document.querySelector("#globalCompaniesGrid");
  if (!grid) return;
  enhanceExistingCompanyCards();
}

function watchGlobalCompaniesGrid() {
  const grid = document.querySelector("#globalCompaniesGrid");
  if (!grid) return;

  const observer = new MutationObserver(() => {
    enhanceExistingCompanyCards();
  });
  observer.observe(grid, { childList: true });
  updateGlobalCompaniesPage();
}

document.addEventListener("DOMContentLoaded", watchGlobalCompaniesGrid);
window.addEventListener("load", updateGlobalCompaniesPage);
