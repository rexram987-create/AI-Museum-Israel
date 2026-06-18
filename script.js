const translations = {
  he: {
    navHistory: "היסטוריה",
    navCompanies: "חברות",
    navTimeline: "ציר זמן",
    navGuide: "מדריך חכם",
    heroEyebrow: "מוזיאון דיגיטלי אינטראקטיבי",
    heroTitle: "המוזיאון הישראלי לבינה מלאכותית",
    heroText: "שער ראשי קצר לפרויקט מתפתח על ההיסטוריה של הבינה המלאכותית ועל החברות שמובילות את התחום בישראל ובעולם.",
    heroAsk: "שאל את המדריך",
    heroExplore: "גלה חברות",
    historyEyebrow: "תקציר ראשוני",
    historyTitle: "נקודות פתיחה בהיסטוריה של ה־AI",
    companiesEyebrow: "טעימה ראשונה",
    companiesTitle: "חברות AI מרכזיות",
    filterAll: "הכול",
    filterGlobal: "עולמי",
    filterIsrael: "ישראל",
    timelineEyebrow: "בקצרה",
    timelineTitle: "אבני דרך נבחרות",
    guideEyebrow: "גרסה ראשונה — מקומית וחינמית",
    guideTitle: "המדריך החכם של המוזיאון",
    guideIntro: "כתוב שאלה בעברית או באנגלית. המדריך מחפש במאגר המידע המקומי של האתר ועונה לפי הערכים הקיימים.",
    questionPlaceholder: "לדוגמה: מי הקים את AI21 Labs?",
    askButton: "חפש תשובה",
    footerText: "AI Museum Israel — פרויקט לימודי, דו־לשוני, ומתפתח.",
    noAnswer: "לא מצאתי תשובה ברורה במאגר המקומי. כדאי להוסיף ערך מתאים לקובץ הידע.",
    resultPrefix: "מצאתי ערך מתאים:"
  },
  en: {
    navHistory: "History",
    navCompanies: "Companies",
    navTimeline: "Timeline",
    navGuide: "Smart Guide",
    heroEyebrow: "Interactive Digital Museum",
    heroTitle: "The Israeli Museum of Artificial Intelligence",
    heroText: "A short landing page for a growing project about the history of AI and the companies leading the field in Israel and around the world.",
    heroAsk: "Ask the Guide",
    heroExplore: "Explore Companies",
    historyEyebrow: "First Overview",
    historyTitle: "Starting Points in AI History",
    companiesEyebrow: "First Selection",
    companiesTitle: "Key AI Companies",
    filterAll: "All",
    filterGlobal: "Global",
    filterIsrael: "Israel",
    timelineEyebrow: "In Brief",
    timelineTitle: "Selected Milestones",
    guideEyebrow: "First version — local and free",
    guideTitle: "The Museum Smart Guide",
    guideIntro: "Write a question in Hebrew or English. The guide searches the local knowledge base and answers from existing entries.",
    questionPlaceholder: "Example: Who founded AI21 Labs?",
    askButton: "Search Answer",
    footerText: "AI Museum Israel — an educational, bilingual, evolving project.",
    noAnswer: "I could not find a clear answer in the local knowledge base. Consider adding a relevant entry.",
    resultPrefix: "I found a matching entry:"
  }
};

let currentLanguage = "he";
let knowledge = { history: [], companies: [], timeline: [] };

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

async function loadKnowledge() {
  const response = await fetch("data/knowledge-base.json");
  knowledge = await response.json();
  renderAll();
}

function t(key) {
  return translations[currentLanguage][key] || key;
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "he" ? "rtl" : "ltr";
  $("#languageToggle").textContent = currentLanguage === "he" ? "English" : "עברית";

  $$('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  $$('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  renderAll();
}

function localized(item, field) {
  return item[field]?.[currentLanguage] || item[field]?.he || item[field] || "";
}

function renderHistory() {
  const grid = $("#historyGrid");
  const featuredHistory = knowledge.history.slice(0, 3);
  grid.innerHTML = featuredHistory.map((item) => `
    <article class="card">
      <span class="badge">${localized(item, "period")}</span>
      <h3>${localized(item, "title")}</h3>
      <p>${localized(item, "summary")}</p>
    </article>
  `).join("");
}

function renderCompanies(filter = document.querySelector(".filter-btn.active")?.dataset.filter || "all") {
  const grid = $("#companiesGrid");
  const filtered = filter === "all" ? knowledge.companies : knowledge.companies.filter((company) => company.region === filter);
  const featuredCompanies = filtered.slice(0, 4);
  grid.innerHTML = featuredCompanies.map((company) => `
    <article class="card">
      <span class="badge">${company.region === "israel" ? t("filterIsrael") : t("filterGlobal")}</span>
      <h3>${company.name}</h3>
      <p>${localized(company, "summary")}</p>
      <p><strong>${localized(company, "fieldLabel")}:</strong> ${localized(company, "field")}</p>
    </article>
  `).join("");
}

function renderTimeline() {
  const list = $("#timelineList");
  const featuredTimeline = knowledge.timeline.slice(0, 3);
  list.innerHTML = featuredTimeline.map((item) => `
    <article class="timeline-item">
      <div class="timeline-year">${item.year}</div>
      <h3>${localized(item, "title")}</h3>
      <p>${localized(item, "summary")}</p>
    </article>
  `).join("");
}

function renderAll() {
  renderHistory();
  renderCompanies();
  renderTimeline();
}

function normalizeText(text) {
  return text.toLowerCase().replace(/[.,:;!?()\-]/g, " ").replace(/\s+/g, " ").trim();
}

function searchKnowledge(query) {
  const q = normalizeText(query);
  if (!q) return null;

  const entries = [
    ...knowledge.history.map((item) => ({ type: "history", item })),
    ...knowledge.companies.map((item) => ({ type: "company", item })),
    ...knowledge.timeline.map((item) => ({ type: "timeline", item }))
  ];

  let best = null;
  let bestScore = 0;

  entries.forEach((entry) => {
    const item = entry.item;
    const text = normalizeText([
      item.name,
      localized(item, "title"),
      localized(item, "summary"),
      localized(item, "field"),
      item.keywords?.join(" ")
    ].join(" "));

    const score = q.split(" ").filter((word) => word.length > 1 && text.includes(word)).length;
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  });

  return bestScore > 0 ? best : null;
}

function answerQuestion() {
  const query = $("#questionInput").value;
  const result = searchKnowledge(query);
  const answerBox = $("#answerBox");

  if (!result) {
    answerBox.textContent = t("noAnswer");
    return;
  }

  const item = result.item;
  const title = item.name || localized(item, "title");
  const summary = localized(item, "summary");
  const field = localized(item, "field");

  answerBox.innerHTML = `
    <strong>${t("resultPrefix")}</strong><br />
    <h3>${title}</h3>
    <p>${summary}</p>
    ${field ? `<p><strong>${localized(item, "fieldLabel")}:</strong> ${field}</p>` : ""}
  `;
}

$("#languageToggle").addEventListener("click", () => {
  currentLanguage = currentLanguage === "he" ? "en" : "he";
  applyLanguage();
});

$$('.filter-btn').forEach((button) => {
  button.addEventListener("click", () => {
    $$('.filter-btn').forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderCompanies(button.dataset.filter);
  });
});

$("#askButton").addEventListener("click", answerQuestion);
$("#questionInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") answerQuestion();
});

loadKnowledge();
applyLanguage();
