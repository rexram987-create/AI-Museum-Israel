const israeliCompanyVisuals = {
  "AI21 Labs": {
    logo: "assets/images/israeli-companies/ai21-logo.jpg",
    alt: "AI21 Labs logo"
  },
  "Wiz": {
    logo: "assets/images/israeli-companies/wiz-logo.svg",
    alt: "Wiz logo"
  },
  "Hailo": {
    logo: "assets/images/israeli-companies/hailo-logo.svg",
    alt: "Hailo logo"
  },
  "Aidoc": {
    logo: "assets/images/israeli-companies/aidoc-new.jpg",
    alt: "Aidoc logo"
  },
  "Gong": {
    logo: "assets/images/israeli-companies/gong-logo.jpg",
    alt: "Gong logo"
  },
  "Deep Instinct": {
    logo: "assets/images/israeli-companies/deep-instinct-logo.jpg",
    alt: "Deep Instinct logo"
  }
};

const fallbackIsraeliCompanies = {
  he: [
    {
      name: "Deep Instinct",
      badge: "ישראל",
      summary: "חברת סייבר ישראלית המשתמשת בלמידה עמוקה לזיהוי ומניעה מוקדמת של איומי סייבר.",
      field: "סייבר, למידה עמוקה ומניעת מתקפות"
    }
  ],
  en: [
    {
      name: "Deep Instinct",
      badge: "Israel",
      summary: "An Israeli cybersecurity company using deep learning for early detection and prevention of cyber threats.",
      field: "Cybersecurity, deep learning, and threat prevention"
    }
  ]
};

function currentMuseumLanguage() {
  return document.documentElement.lang === "en" ? "en" : "he";
}

function createIsraeliCompanyLogo(name) {
  const visual = israeliCompanyVisuals[name];
  if (!visual) return null;

  const wrapper = document.createElement("div");
  wrapper.className = "company-logo-wrap";
  wrapper.innerHTML = `<img class="company-logo" src="${visual.logo}" alt="${visual.alt}" onerror="this.closest('.company-logo-wrap').style.display='none'" />`;
  return wrapper;
}

function enhanceIsraeliCompanyCards() {
  document.querySelectorAll("#israeliCompaniesGrid .card").forEach((card) => {
    const title = card.querySelector("h3")?.textContent?.trim();
    card.classList.add("company-card");

    if (card.querySelector(".company-logo-wrap")) {
      card.dataset.logoEnhanced = "true";
      return;
    }

    const logo = createIsraeliCompanyLogo(title);
    if (logo) card.prepend(logo);
    card.dataset.logoEnhanced = "true";
  });
}

function israeliCompanyExists(name) {
  return [...document.querySelectorAll("#israeliCompaniesGrid h3")].some((heading) => heading.textContent.trim() === name);
}

function addFallbackIsraeliCompaniesIfMissing() {
  const grid = document.querySelector("#israeliCompaniesGrid");
  if (!grid) return;

  const lang = currentMuseumLanguage();
  fallbackIsraeliCompanies[lang].forEach((company) => {
    if (israeliCompanyExists(company.name)) return;

    const card = document.createElement("article");
    card.className = "card company-card";
    card.dataset.logoEnhanced = "true";
    card.innerHTML = `
      <span class="badge">${company.badge}</span>
      <h3>${company.name}</h3>
      <p>${company.summary}</p>
      <p><strong>${lang === "he" ? "תחום" : "Field"}:</strong> ${company.field}</p>
    `;

    const logo = createIsraeliCompanyLogo(company.name);
    if (logo) card.prepend(logo);
    grid.appendChild(card);
  });
}

function updateIsraeliCompaniesPage() {
  const grid = document.querySelector("#israeliCompaniesGrid");
  if (!grid) return;
  addFallbackIsraeliCompaniesIfMissing();
  enhanceIsraeliCompanyCards();
}

function watchIsraeliCompaniesGrid() {
  const grid = document.querySelector("#israeliCompaniesGrid");
  if (!grid) return;

  const observer = new MutationObserver(() => {
    window.clearTimeout(window.israeliCompaniesUpdateTimer);
    window.israeliCompaniesUpdateTimer = window.setTimeout(updateIsraeliCompaniesPage, 50);
  });

  observer.observe(grid, { childList: true });
  updateIsraeliCompaniesPage();
}

document.addEventListener("DOMContentLoaded", watchIsraeliCompaniesGrid);
window.addEventListener("load", updateIsraeliCompaniesPage);
