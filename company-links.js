const companyPageLinks = {
  "OpenAI": "companies/openai.html",
  "Google DeepMind": "companies/deepmind.html",
  "NVIDIA": "companies/nvidia.html",
  "Anthropic": "companies/anthropic.html",
  "xAI": "companies/xai.html",
  "Mistral AI": "companies/mistral.html",
  "AI21 Labs": "companies/ai21.html",
  "Wiz": "companies/wiz.html",
  "Hailo": "companies/hailo.html",
  "Aidoc": "companies/aidoc.html",
  "Gong": "companies/gong.html",
  "Deep Instinct": "companies/deep-instinct.html"
};

const companyPersonLinks = {
  "OpenAI": "people/sam-altman.html",
  "Google DeepMind": "people/demis-hassabis.html",
  "NVIDIA": "people/jensen-huang.html",
  "Anthropic": "people/dario-amodei.html",
  "xAI": "people/elon-musk.html",
  "Mistral AI": "people/arthur-mensch.html",
  "AI21 Labs": "people/amnon-shashua.html",
  "Wiz": "people/assaf-rappaport.html",
  "Hailo": "people.html",
  "Aidoc": "people.html",
  "Gong": "people.html",
  "Deep Instinct": "people.html"
};

const companyModelLinks = {
  "OpenAI": "models/gpt.html",
  "Google DeepMind": "models/gemini.html",
  "NVIDIA": "models.html",
  "Anthropic": "models/claude.html",
  "xAI": "models/grok.html",
  "Mistral AI": "models/mistral.html",
  "AI21 Labs": "models/jamba.html",
  "Wiz": "models.html",
  "Hailo": "models.html",
  "Aidoc": "models.html",
  "Gong": "models.html",
  "Deep Instinct": "models.html"
};

function companyLinkLanguage() {
  return document.documentElement.lang === "en" ? "en" : "he";
}

function ensureModelButtonStylesheet() {
  if (document.querySelector('link[href="model-buttons.css"]')) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "model-buttons.css";
  document.head.appendChild(link);
}

function companyButtonText(type, title) {
  const lang = companyLinkLanguage();
  if (type === "company") return lang === "he" ? "לדף החברה" : "Company";
  if (type === "person") return lang === "he" ? "לדף האיש" : "Person";
  const hasSpecificModel = companyModelLinks[title] && companyModelLinks[title] !== "models.html";
  if (lang === "he") return hasSpecificModel ? "לדף המודל" : "לאגף המודלים";
  return hasSpecificModel ? "Model" : "Models";
}

function addCompanyPageLinks() {
  ensureModelButtonStylesheet();
  document.querySelectorAll("#globalCompaniesGrid .card, #israeliCompaniesGrid .card").forEach((card) => {
    const title = card.querySelector("h3")?.textContent?.trim();
    const companyHref = companyPageLinks[title];
    if (!companyHref) return;

    card.querySelectorAll(".company-page-link, .company-cross-links").forEach((el) => el.remove());

    const row = document.createElement("div");
    row.className = "person-link-row company-cross-links";

    const modelLink = document.createElement("a");
    modelLink.className = "secondary-btn company-page-link";
    modelLink.href = companyModelLinks[title] || "models.html";
    modelLink.textContent = companyButtonText("model", title);

    const companyLink = document.createElement("a");
    companyLink.className = "secondary-btn company-page-link";
    companyLink.href = companyHref;
    companyLink.textContent = companyButtonText("company", title);

    const personLink = document.createElement("a");
    personLink.className = "secondary-btn company-page-link";
    personLink.href = companyPersonLinks[title] || "people.html";
    personLink.textContent = companyButtonText("person", title);

    row.append(modelLink, companyLink, personLink);
    card.appendChild(row);
  });
}

function watchCompanyPageLinks() {
  const grids = [document.querySelector("#globalCompaniesGrid"), document.querySelector("#israeliCompaniesGrid")].filter(Boolean);
  grids.forEach((grid) => {
    const observer = new MutationObserver(() => {
      window.clearTimeout(window.companyLinksTimer);
      window.companyLinksTimer = window.setTimeout(addCompanyPageLinks, 120);
    });
    observer.observe(grid, { childList: true, subtree: false });
  });
  addCompanyPageLinks();
}

document.addEventListener("DOMContentLoaded", watchCompanyPageLinks);
window.addEventListener("load", addCompanyPageLinks);