const companyDetails = {
  he: {
    "OpenAI": {
      founded: "2015",
      country: "ארצות הברית",
      founders: "סם אלטמן, גרג ברוקמן, איליה סוצקבר, אילון מאסק ואחרים",
      breakthrough: "ChatGPT הפך את הבינה המלאכותית היוצרת לנגישה לקהל הרחב בסוף 2022.",
      products: "GPT, ChatGPT, DALL·E, Sora"
    },
    "Google DeepMind": {
      founded: "2010",
      country: "בריטניה / ארצות הברית",
      founders: "דמיס הסאביס, שיין לג, מוסטפא סולימאן",
      breakthrough: "AlphaGo הדגים פריצת דרך בלמידת חיזוק, ובהמשך AlphaFold השפיע על מחקר חלבונים ומדע חישובי.",
      products: "AlphaGo, AlphaFold, Gemini, Imagen, Veo"
    },
    "NVIDIA": {
      founded: "1993",
      country: "ארצות הברית",
      founders: "ג׳נסן הואנג, כריס מלאכובסקי, קרטיס פרים",
      breakthrough: "המעבדים הגרפיים ותשתית CUDA הפכו לבסיס מרכזי לאימון והרצת מודלי AI גדולים.",
      products: "GPU, CUDA, DGX, Blackwell, Hopper"
    },
    "Anthropic": {
      founded: "2021",
      country: "ארצות הברית",
      founders: "דריו אמודיי, דניאלה אמודיי וצוות יוצאי OpenAI",
      breakthrough: "פיתוח Claude והובלת גישה המדגישה בטיחות, זהירות ו־Constitutional AI.",
      products: "Claude, Claude Code"
    },
    "xAI": {
      founded: "2023",
      country: "ארצות הברית",
      founders: "אילון מאסק וצוות חוקרי AI",
      breakthrough: "פיתוח Grok כחלק מתחרות מודלי השפה והצ׳אטבוטים המתקדמים.",
      products: "Grok"
    },
    "Mistral AI": {
      founded: "2023",
      country: "צרפת",
      founders: "ארתור מנש, גיום למפל, טימותה לקרואה",
      breakthrough: "חברה אירופית בולטת בתחום מודלי שפה פתוחים ויעילים.",
      products: "Mistral Large, Mistral Small, Codestral, Le Chat"
    },
    "AI21 Labs": {
      founded: "2017",
      country: "ישראל",
      founders: "יואב שוהם, אורי גושן, אמנון שעשוע",
      breakthrough: "פיתוח מודלי שפה וכלי כתיבה כמו Wordtune ומשפחת Jurassic.",
      products: "Wordtune, Jurassic, AI21 Studio"
    },
    "Wiz": {
      founded: "2020",
      country: "ישראל / ארצות הברית",
      founders: "אסף רפפורט, ינון קוסטיקה, רועי רזניק, עמי לוטבק",
      breakthrough: "פלטפורמת אבטחת ענן שמנתחת סיכונים והרשאות בסביבות ענן מורכבות.",
      products: "Cloud Security Platform, CNAPP"
    },
    "Hailo": {
      founded: "2017",
      country: "ישראל",
      founders: "אור דנון, אבי באום, הדר צייטלין, רמי פייג",
      breakthrough: "שבבי AI למכשירי קצה שמאפשרים להריץ מודלים במצלמות, רכבים ומכשירים ללא תלות מלאה בענן.",
      products: "Hailo-8, Hailo-10, Hailo-15"
    },
    "Aidoc": {
      founded: "2016",
      country: "ישראל",
      founders: "אלעד וולך, מיכאל ברגינסקי, גיא ריינר",
      breakthrough: "מערכות AI לדימות רפואי המסייעות בזיהוי ממצאים דחופים ובהתרעות לרופאים.",
      products: "AI Radiology, Clinical AI Platform"
    },
    "Gong": {
      founded: "2015",
      country: "ישראל / ארצות הברית",
      founders: "עמית בן־דב, אילון רשף",
      breakthrough: "ניתוח שיחות מכירה ותקשורת עסקית כדי להפיק תובנות על לקוחות ותהליכי מכירה.",
      products: "Revenue Intelligence Platform"
    },
    "Deep Instinct": {
      founded: "2015",
      country: "ישראל / ארצות הברית",
      founders: "גיא כספי, ד״ר אלי דוד, נדב ממן",
      breakthrough: "שימוש בלמידה עמוקה לזיהוי ומניעה מוקדמת של נוזקות ואיומי סייבר.",
      products: "Deep Learning Cybersecurity Platform"
    }
  },
  en: {
    "OpenAI": {
      founded: "2015",
      country: "United States",
      founders: "Sam Altman, Greg Brockman, Ilya Sutskever, Elon Musk, and others",
      breakthrough: "ChatGPT brought generative AI to a mass audience in late 2022.",
      products: "GPT, ChatGPT, DALL·E, Sora"
    },
    "Google DeepMind": {
      founded: "2010",
      country: "United Kingdom / United States",
      founders: "Demis Hassabis, Shane Legg, Mustafa Suleyman",
      breakthrough: "AlphaGo became a landmark in reinforcement learning, and AlphaFold later transformed computational protein research.",
      products: "AlphaGo, AlphaFold, Gemini, Imagen, Veo"
    },
    "NVIDIA": {
      founded: "1993",
      country: "United States",
      founders: "Jensen Huang, Chris Malachowsky, Curtis Priem",
      breakthrough: "GPUs and CUDA became central infrastructure for training and running large AI models.",
      products: "GPU, CUDA, DGX, Blackwell, Hopper"
    },
    "Anthropic": {
      founded: "2021",
      country: "United States",
      founders: "Dario Amodei, Daniela Amodei, and other former OpenAI researchers",
      breakthrough: "Claude and a safety-focused approach known for Constitutional AI.",
      products: "Claude, Claude Code"
    },
    "xAI": {
      founded: "2023",
      country: "United States",
      founders: "Elon Musk and an AI research team",
      breakthrough: "Grok entered the competition among advanced language models and chatbots.",
      products: "Grok"
    },
    "Mistral AI": {
      founded: "2023",
      country: "France",
      founders: "Arthur Mensch, Guillaume Lample, Timothée Lacroix",
      breakthrough: "A leading European AI company focused on efficient and open-weight language models.",
      products: "Mistral Large, Mistral Small, Codestral, Le Chat"
    },
    "AI21 Labs": {
      founded: "2017",
      country: "Israel",
      founders: "Yoav Shoham, Ori Goshen, Amnon Shashua",
      breakthrough: "Language models and writing tools such as Wordtune and the Jurassic model family.",
      products: "Wordtune, Jurassic, AI21 Studio"
    },
    "Wiz": {
      founded: "2020",
      country: "Israel / United States",
      founders: "Assaf Rappaport, Yinon Costica, Roy Reznik, Ami Luttwak",
      breakthrough: "A cloud security platform for analyzing risks and permissions across complex cloud environments.",
      products: "Cloud Security Platform, CNAPP"
    },
    "Hailo": {
      founded: "2017",
      country: "Israel",
      founders: "Orr Danon, Avi Baum, Hadar Zeitlin, Rami Feig",
      breakthrough: "Edge AI chips that run models on cameras, vehicles, and devices without full cloud dependence.",
      products: "Hailo-8, Hailo-10, Hailo-15"
    },
    "Aidoc": {
      founded: "2016",
      country: "Israel",
      founders: "Elad Walach, Michael Braginsky, Guy Reiner",
      breakthrough: "Medical imaging AI that helps detect urgent findings and notify clinical teams.",
      products: "AI Radiology, Clinical AI Platform"
    },
    "Gong": {
      founded: "2015",
      country: "Israel / United States",
      founders: "Amit Bendov, Eilon Reshef",
      breakthrough: "AI analysis of sales conversations and business communication for revenue insights.",
      products: "Revenue Intelligence Platform"
    },
    "Deep Instinct": {
      founded: "2015",
      country: "Israel / United States",
      founders: "Guy Caspi, Dr. Eli David, Nadav Maman",
      breakthrough: "Deep learning for early detection and prevention of malware and cyber threats.",
      products: "Deep Learning Cybersecurity Platform"
    }
  }
};

function companyDetailsLanguage() {
  return document.documentElement.lang === "en" ? "en" : "he";
}

function labelText(key) {
  const lang = companyDetailsLanguage();
  const labels = {
    he: {
      founded: "שנת הקמה",
      country: "מדינת מקור",
      founders: "מייסדים",
      breakthrough: "פריצת דרך מרכזית",
      products: "מוצרים / מודלים מרכזיים"
    },
    en: {
      founded: "Founded",
      country: "Country",
      founders: "Founders",
      breakthrough: "Key breakthrough",
      products: "Main products / models"
    }
  };
  return labels[lang][key];
}

function createDetailsBlock(details) {
  const block = document.createElement("div");
  block.className = "company-details";
  block.innerHTML = `
    <p><strong>${labelText("founded")}:</strong> ${details.founded}</p>
    <p><strong>${labelText("country")}:</strong> ${details.country}</p>
    <p><strong>${labelText("founders")}:</strong> ${details.founders}</p>
    <p><strong>${labelText("breakthrough")}:</strong> ${details.breakthrough}</p>
    <p><strong>${labelText("products")}:</strong> ${details.products}</p>
  `;
  return block;
}

function enrichCompanyCards() {
  const lang = companyDetailsLanguage();
  document.querySelectorAll("#globalCompaniesGrid .card, #israeliCompaniesGrid .card").forEach((card) => {
    const title = card.querySelector("h3")?.textContent?.trim();
    const details = companyDetails[lang][title];
    if (!details) return;

    const existing = card.querySelector(".company-details");
    if (existing) existing.remove();

    card.appendChild(createDetailsBlock(details));
  });
}

function watchCompanyDetailGrids() {
  const grids = [document.querySelector("#globalCompaniesGrid"), document.querySelector("#israeliCompaniesGrid")].filter(Boolean);
  grids.forEach((grid) => {
    const observer = new MutationObserver(() => {
      window.clearTimeout(window.companyDetailsTimer);
      window.companyDetailsTimer = window.setTimeout(enrichCompanyCards, 80);
    });
    observer.observe(grid, { childList: true, subtree: false });
  });
  enrichCompanyCards();
}

document.addEventListener("DOMContentLoaded", watchCompanyDetailGrids);
window.addEventListener("load", enrichCompanyCards);
