const translations = {
  he: {
    navHistory: "היסטוריה",
    navGlobalCompanies: "חברות עולמיות",
    navIsraeliCompanies: "חברות ישראליות",
    navPeople: "דמויות מרכזיות",
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
    historyPageText: "עמוד זה מציג את התפתחות הבינה המלאכותית בסדר כרונולוגי, מהנוירון המלאכותי הראשון ועד מרוץ ה־AI העולמי.",
    globalPageTitle: "חברות AI מובילות בעולם",
    globalPageText: "עמוד לחברות הבינלאומיות המרכזיות שמעצבות את תחום הבינה המלאכותית.",
    israelPageTitle: "חברות AI ישראליות מובילות",
    israelPageText: "עמוד לחברות ישראליות בולטות בתחומי מודלי שפה, סייבר, שבבים, רפואה, מכירות ויצירה.",
    timelinePageTitle: "ציר הזמן של הבינה המלאכותית",
    timelinePageText: "ציר זמן כרונולוגי הכולל את האירועים המרכזיים מראשית התחום ועד ההאצה הגדולה של השנים האחרונות.",
    guidePageTitle: "המדריך החכם",
    guidePageText: "גרסה ראשונה של מדריך מקומי שמחפש בתוך מאגר הידע של האתר. בהמשך אפשר יהיה להפוך אותו לעוזר AI מתקדם יותר.",
    goldenStation: "תחנת האצה מרכזית"
  },
  en: {
    navHistory: "History",
    navGlobalCompanies: "Global Companies",
    navIsraeliCompanies: "Israeli Companies",
    navPeople: "Key People",
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
    historyPageText: "This page presents the development of Artificial Intelligence in chronological order, from the first artificial neuron to the global AI race.",
    globalPageTitle: "Leading AI Companies Worldwide",
    globalPageText: "A page for major international companies shaping the field of Artificial Intelligence.",
    israelPageTitle: "Leading Israeli AI Companies",
    israelPageText: "A page for notable Israeli companies in language models, cybersecurity, chips, medicine, sales, and creative AI.",
    timelinePageTitle: "The AI Timeline",
    timelinePageText: "A chronological timeline covering key events from the early field to the major acceleration of recent years.",
    guidePageTitle: "The Smart Guide",
    guidePageText: "A first version of a local guide that searches inside the website knowledge base. Later it can become a more advanced AI assistant.",
    goldenStation: "Major acceleration milestone"
  }
};

let currentLanguage = localStorage.getItem("aiMuseumLanguage") || "he";
let knowledge = { history: [], companies: [], timeline: [] };

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function injectPeopleNavLink() {
  const nav = document.querySelector(".nav-links");
  if (!nav || nav.querySelector('[href="people.html"]')) return;

  const timelineLink = nav.querySelector('[href="timeline.html"]');
  const peopleLink = document.createElement("a");
  peopleLink.href = "people.html";
  peopleLink.dataset.i18n = "navPeople";
  peopleLink.textContent = translations[currentLanguage].navPeople;

  if (timelineLink) nav.insertBefore(peopleLink, timelineLink);
  else nav.appendChild(peopleLink);
}

const historyImages = {
  "2012": {
    src: "assets/images/history/alexnet-diagram.svg",
    alt: "AlexNet block diagram",
    credit: "AlexNet diagram — Zhang, Lipton, Li and Smola, CC BY-SA 4.0"
  },
  "2017": {
    src: "assets/images/history/transformer-architecture.png",
    alt: "Transformer model architecture",
    credit: "Transformer architecture — Yuening Jia, CC BY-SA 3.0"
  }
};

async function loadKnowledge() {
  injectPeopleNavLink();
  const response = await fetch("data/knowledge-base.json");
  knowledge = await response.json();
  renderAll();
}

function t(key) {
  return translations[currentLanguage][key] || key;
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "he" ? "rtl" : "ltr";
  $$('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  const input = $('#questionInput');
  if (input) input.placeholder = t('questionPlaceholder');
  const toggle = $('#languageToggle');
  if (toggle) toggle.textContent = currentLanguage === "he" ? "English" : "עברית";
}

function renderAll() {
  injectPeopleNavLink();
  applyTranslations();
  if ($('#historyGrid')) renderHistoryPreview();
  if ($('#companiesGrid')) renderCompaniesPreview();
  if ($('#timelineList')) renderTimelinePreview();
  if ($('#fullTimelineList')) renderFullTimeline();
  if ($('#globalCompaniesGrid')) renderCompanyPage('global');
  if ($('#israeliCompaniesGrid')) renderCompanyPage('israel');
}

function renderHistoryPreview() {
  const grid = $('#historyGrid');
  grid.innerHTML = knowledge.history.slice(0, 6).map(item => `<article class="card"><span class="badge">${item.year}</span><h3>${item.title[currentLanguage]}</h3><p>${item.summary[currentLanguage]}</p></article>`).join('');
}

function renderCompaniesPreview() {
  const grid = $('#companiesGrid');
  const cards = knowledge.companies.map(company => `<article class="card" data-region="${company.region}"><span class="badge">${company.region === 'israel' ? 'Israel' : 'Global'}</span><h3>${company.name}</h3><p>${company.summary[currentLanguage]}</p></article>`).join('');
  grid.innerHTML = cards;
  $$('.filter-btn').forEach(btn => btn.addEventListener('click', () => filterCompanies(btn.dataset.filter)));
}

function filterCompanies(filter) {
  $$('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.filter === filter));
  $$('#companiesGrid .card').forEach(card => {
    card.style.display = filter === 'all' || card.dataset.region === filter ? 'block' : 'none';
  });
}

function renderTimelinePreview() {
  $('#timelineList').innerHTML = knowledge.timeline.slice(0, 5).map(item => timelineTemplate(item)).join('');
}

function renderFullTimeline() {
  $('#fullTimelineList').innerHTML = knowledge.timeline.map(item => timelineTemplate(item)).join('');
}

function timelineTemplate(item) {
  const isGolden = item.year === "2022";
  return `<article class="timeline-item ${isGolden ? 'timeline-item-highlight' : ''}"><div class="timeline-year">${item.year}</div>${isGolden ? `<span class="highlight-badge">${t('goldenStation')}</span>` : ''}<h3>${item.title[currentLanguage]}</h3><p>${item.summary[currentLanguage]}</p>${historyImages[item.year] ? imageTemplate(historyImages[item.year]) : ''}</article>`;
}

function imageTemplate(image) {
  return `<figure class="timeline-image js-modal-image" data-full="${image.src}" data-caption="${image.credit}"><img src="${image.src}" alt="${image.alt}" onerror="this.closest('.timeline-image').style.display='none'" /><figcaption>${image.credit}</figcaption></figure>`;
}

function renderCompanyPage(region) {
  const grid = region === 'global' ? $('#globalCompaniesGrid') : $('#israeliCompaniesGrid');
  grid.innerHTML = knowledge.companies.filter(company => company.region === region).map(company => `<article class="card"><span class="badge">${region === 'global' ? 'Global' : 'Israel'}</span><h3>${company.name}</h3><p>${company.summary[currentLanguage]}</p><p><strong>${currentLanguage === 'he' ? 'תחום' : 'Field'}:</strong> ${company.field[currentLanguage]}</p></article>`).join('');
}

function setupGuide() {
  const btn = $('#askButton');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const q = $('#questionInput').value.trim().toLowerCase();
    const answerBox = $('#answerBox');
    const allEntries = [...knowledge.history, ...knowledge.companies, ...knowledge.timeline];
    const match = allEntries.find(item => JSON.stringify(item).toLowerCase().includes(q));
    answerBox.innerHTML = match ? `<strong>${t('resultPrefix')}</strong><br>${match.title?.[currentLanguage] || match.name}<p>${match.summary?.[currentLanguage] || match.field?.[currentLanguage] || ''}</p>` : t('noAnswer');
  });
}

function setupLanguageToggle() {
  const toggle = $('#languageToggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === "he" ? "en" : "he";
    localStorage.setItem("aiMuseumLanguage", currentLanguage);
    renderAll();
  });
}

function setupImageModal() {
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  modal.innerHTML = '<button class="modal-close" aria-label="Close">×</button><img alt=""><p></p>';
  document.body.appendChild(modal);
  const img = modal.querySelector('img');
  const caption = modal.querySelector('p');
  document.body.addEventListener('click', (event) => {
    const figure = event.target.closest('.js-modal-image');
    if (!figure) return;
    img.src = figure.dataset.full;
    caption.textContent = figure.dataset.caption || '';
    modal.classList.add('is-open');
  });
  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.classList.contains('modal-close')) modal.classList.remove('is-open');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  injectPeopleNavLink();
  setupLanguageToggle();
  setupGuide();
  setupImageModal();
  loadKnowledge();
});