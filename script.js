const translations = {
  he: {
    navHistory: "היסטוריה",
    navGlobalCompanies: "חברות עולמיות",
    navIsraeliCompanies: "חברות ישראליות",
    navTimeline: "ציר זמן",
    navGuide: "מדריך חכם",
    heroEyebrow: "מוזיאון דיגיטלי אינטראקטיבי",
    heroTitle: "המוזיאון הישראלי לבינה מלאכותית",
    heroText: "שער ראשי קצר לפרויקט מתפתח על ההיסטוריה של הבינה המלאכותית ועל החברות שמובילות את התחום בישראל ובעולם.",
    heroAsk: "שאל את המדריך",
    heroExploreHistory: "התחל מההיסטוריה",
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
    resultPrefix: "מצאתי ערך מתאים:",
    readMoreHistory: "לעמוד ההיסטוריה המלא",
    globalCompaniesPage: "חברות עולמיות",
    israeliCompaniesPage: "חברות ישראליות",
    fullTimeline: "לציר הזמן המלא",
    historyPageTitle: "היסטוריה של הבינה המלאכותית",
    historyPageText: "עמוד זה ירכז בהמשך את כל ההתפתחות ההיסטורית של התחום: חוקרים, רעיונות, פריצות דרך, תקופות שפל ומהפכות טכנולוגיות.",
    globalPageTitle: "חברות AI מובילות בעולם",
    globalPageText: "עמוד לחברות הבינלאומיות המרכזיות שמעצבות את תחום הבינה המלאכותית.",
    israelPageTitle: "חברות AI ישראליות מובילות",
    israelPageText: "עמוד לחברות ישראליות בולטות בתחומי מודלי שפה, סייבר, שבבים, רפואה, מכירות ויצירה.",
    timelinePageTitle: "ציר הזמן של הבינה המלאכותית",
    timelinePageText: "עמוד כרונולוגי שיגדל בהדרגה ויכלול אירועים מרכזיים מראשית התחום ועד היום.",
    guidePageTitle: "המדריך החכם",
    guidePageText: "גרסה ראשונה של מדריך מקומי שמחפש בתוך מאגר הידע של האתר. בהמשך אפשר יהיה להפוך אותו לעוזר AI מתקדם יותר."
  },
  en: {
    navHistory: "History",
    navGlobalCompanies: "Global Companies",
    navIsraeliCompanies: "Israeli Companies",
    navTimeline: "Timeline",
    navGuide: "Smart Guide",
    heroEyebrow: "Interactive Digital Museum",
    heroTitle: "The Israeli Museum of Artificial Intelligence",
    heroText: "A short landing page for a growing project about the history of AI and the companies leading the field in Israel and around the world.",
    heroAsk: "Ask the Guide",
    heroExploreHistory: "Start with History",
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
    resultPrefix: "I found a matching entry:",
    readMoreHistory: "Full History Page",
    globalCompaniesPage: "Global Companies",
    israeliCompaniesPage: "Israeli Companies",
    fullTimeline: "Full Timeline",
    historyPageTitle: "History of Artificial Intelligence",
    historyPageText: "This page will gradually collect the full historical development of the field: researchers, ideas, breakthroughs, AI winters, and technological revolutions.",
    globalPageTitle: "Leading AI Companies Worldwide",
    globalPageText: "A page for major international companies shaping the field of Artificial Intelligence.",
    israelPageTitle: "Leading Israeli AI Companies",
    israelPageText: "A page for notable Israeli companies in language models, cybersecurity, chips, medicine, sales, and creative AI.",
    timelinePageTitle: "The AI Timeline",
    timelinePageText: "A chronological page that will grow over time and include major events from the early field to the present day.",
    guidePageTitle: "The Smart Guide",
    guidePageText: "A first version of a local guide that searches inside the website knowledge base. Later it can become a more advanced AI assistant."
  }
};

let currentLanguage = localStorage.getItem("aiMuseumLanguage") || "he";
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

  const toggle = $("#languageToggle");
  if (toggle) toggle.textContent = currentLanguage === "he" ? "English" : "עברית";

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

function cardTemplate(item) {
  const title = item.name || localized(item, "title");
  const badge = localized(item, "period") || (item.region === "israel" ? t("filterIsrael") : t("filterGlobal"));
  const field = localized(item, "field");
  return `
    <article class="card">
      <span class="badge">${badge}</span>
      <h3>${title}</h3>
      <p>${localized(item, "summary")}</p>
      ${field ? `<p><strong>${localized(item, "fieldLabel")}:</strong> ${field}</p>` : ""}
    </article>
  `;
}

function timelineTemplate(item) {
  return `
    <article class="timeline-item">
      <div class="timeline-year">${item.year}</div>
      <h3>${localized(item, "title")}</h3>
      <p>${localized(item, "summary")}</p>
    </article>
  `;
}

function renderHome() {
  const historyGrid = $("#historyGrid");
  if (historyGrid) historyGrid.innerHTML = knowledge.history.slice(0, 3).map(cardTemplate).join("");

  const companiesGrid = $("#companiesGrid");
  if (companiesGrid) {
    const activeFilter = document.querySelector(".filter-btn.active")?.dataset.filter || "all";
    const filtered = activeFilter === "all" ? knowledge.companies : knowledge.companies.filter((company) => company.region === activeFilter);
    companiesGrid.innerHTML = filtered.slice(0, 4).map(cardTemplate).join("");
  }

  const timelineList = $("#timelineList");
  if (timelineList) timelineList.innerHTML = knowledge.timeline.slice(0, 3).map(timelineTemplate).join("");
}

function renderFullPages() {
  const fullHistory = $("#fullHistoryGrid");
  if (fullHistory) fullHistory.innerHTML = knowledge.history.map(cardTemplate).join("");

  const globalCompanies = $("#globalCompaniesGrid");
  if (globalCompanies) globalCompanies.innerHTML = knowledge.companies.filter((company) => company.region === "global").map(cardTemplate).join("");

  const israeliCompanies = $("#israeliCompaniesGrid");
  if (israeliCompanies) israeliCompanies.innerHTML = knowledge.companies.filter((company) => company.region === "israel").map(cardTemplate).join("");

  const fullTimeline = $("#fullTimelineList");
  if (fullTimeline) fullTimeline.innerHTML = knowledge.timeline.map(timelineTemplate).join("");
}

function renderAll() {
  renderHome();
  renderFullPages();
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
  const input = $("#questionInput");
  const answerBox = $("#answerBox");
  if (!input || !answerBox) return;

  const result = searchKnowledge(input.value);
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

const languageToggle = $("#languageToggle");
if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "he" ? "en" : "he";
    localStorage.setItem("aiMuseumLanguage", currentLanguage);
    applyLanguage();
  });
}

$$('.filter-btn').forEach((button) => {
  button.addEventListener("click", () => {
    $$('.filter-btn').forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderHome();
  });
});

const askButton = $("#askButton");
if (askButton) askButton.addEventListener("click", answerQuestion);

const questionInput = $("#questionInput");
if (questionInput) {
  questionInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") answerQuestion();
  });
}

loadKnowledge();
applyLanguage();
