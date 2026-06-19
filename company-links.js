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

function companyLinkLanguage() {
  return document.documentElement.lang === "en" ? "en" : "he";
}

function addCompanyPageLinks() {
  document.querySelectorAll("#globalCompaniesGrid .card, #israeliCompaniesGrid .card").forEach((card) => {
    const title = card.querySelector("h3")?.textContent?.trim();
    const href = companyPageLinks[title];
    if (!href) return;

    const oldLink = card.querySelector(".company-page-link");
    if (oldLink) oldLink.remove();

    const link = document.createElement("a");
    link.className = "secondary-btn company-page-link";
    link.href = href;
    link.textContent = companyLinkLanguage() === "he" ? "למידע מורחב" : "Read more";
    card.appendChild(link);
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
