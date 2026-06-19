const globalCompanyVisuals = {
  "OpenAI": {
    logo: "assets/images/companies/openai-logo.jpg",
    alt: "OpenAI logo"
  },
  "Google DeepMind": {
    logo: "assets/images/companies/deepmind-logo.jpg",
    alt: "Google DeepMind logo"
  },
  "NVIDIA": {
    logo: "assets/images/companies/nvidia-logo.jpg",
    alt: "NVIDIA logo"
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

const fallbackGlobalCompanies = {
  he: [
    {
      name: "xAI",
      badge: "עולמי",
      summary: "חברת בינה מלאכותית אמריקאית שהוקמה על ידי אילון מאסק ומתמקדת במודלי שפה, צ׳אטבוטים וחיבור למערכת X.",
      field: "מודלי שפה, Grok, צ׳אטבוטים ו־AI בזמן אמת"
    },
    {
      name: "Mistral AI",
      badge: "עולמי",
      summary: "חברת AI צרפתית בולטת המתמקדת במודלים יעילים, מודלים פתוחים וכלי בינה מלאכותית לארגונים ולמפתחים.",
      field: "מודלי שפה פתוחים, מודלים יעילים ו־AI אירופי"
    }
  ],
  en: [
    {
      name: "xAI",
      badge: "Global",
      summary: "An American AI company founded by Elon Musk, focused on language models, chatbots, and integration with the X platform.",
      field: "Language models, Grok, chatbots, and real-time AI"
    },
    {
      name: "Mistral AI",
      badge: "Global",
      summary: "A notable French AI company focused on efficient models, open models, and AI tools for organizations and developers.",
      field: "Open language models, efficient models, and European AI"
    }
  ]
};

function currentMuseumLanguage() {
  return document.documentElement.lang === "en" ? "en" : "he";
}

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
    const title = card.querySelector("h3")?.textContent?.trim();
    card.classList.add("company-card");

    if (card.querySelector(".company-logo-wrap")) {
      card.dataset.logoEnhanced = "true";
      return;
    }

    const logo = createCompanyLogo(title);
    if (logo) card.prepend(logo);
    card.dataset.logoEnhanced = "true";
  });
}

function companyExists(name) {
  return [...document.querySelectorAll("#globalCompaniesGrid h3")].some((heading) => heading.textContent.trim() === name);
}

function addFallbackCompaniesIfMissing() {
  const grid = document.querySelector("#globalCompaniesGrid");
  if (!grid) return;

  const lang = currentMuseumLanguage();
  fallbackGlobalCompanies[lang].forEach((company) => {
    if (companyExists(company.name)) return;

    const card = document.createElement("article");
    card.className = "card company-card";
    card.dataset.logoEnhanced = "true";
    card.innerHTML = `
      <span class="badge">${company.badge}</span>
      <h3>${company.name}</h3>
      <p>${company.summary}</p>
      <p><strong>${lang === "he" ? "תחום" : "Field"}:</strong> ${company.field}</p>
    `;

    const logo = createCompanyLogo(company.name);
    if (logo) card.prepend(logo);
    grid.appendChild(card);
  });
}

function updateGlobalCompaniesPage() {
  const grid = document.querySelector("#globalCompaniesGrid");
  if (!grid) return;
  addFallbackCompaniesIfMissing();
  enhanceExistingCompanyCards();
}

function watchGlobalCompaniesGrid() {
  const grid = document.querySelector("#globalCompaniesGrid");
  if (!grid) return;

  const observer = new MutationObserver(() => {
    window.clearTimeout(window.globalCompaniesUpdateTimer);
    window.globalCompaniesUpdateTimer = window.setTimeout(updateGlobalCompaniesPage, 50);
  });

  observer.observe(grid, { childList: true });
  updateGlobalCompaniesPage();
}

document.addEventListener("DOMContentLoaded", watchGlobalCompaniesGrid);
window.addEventListener("load", updateGlobalCompaniesPage);
