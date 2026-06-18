const timelineImageMap = {
  "1950": {
    src: "assets/images/history/alan-turing.jpg",
    alt: "Alan Turing",
    credit: "Alan Turing image — see image credits"
  },
  "1956": {
    src: "assets/images/history/dartmouth-workshop-1956.jpg",
    alt: "Dartmouth Workshop 1956",
    credit: "Dartmouth Workshop image — see image credits"
  },
  "1997": {
    src: "assets/images/history/deep-blue.jpg",
    alt: "Deep Blue chess computer",
    credit: "Deep Blue image — see image credits"
  },
  "2012": {
    src: "assets/images/history/alexnet-diagram.jpg",
    alt: "AlexNet diagram",
    credit: "AlexNet diagram — Zhang, Lipton, Li and Smola, CC BY-SA 4.0"
  },
  "2017": {
    src: "assets/images/history/transformer-architecture.jpg",
    alt: "Transformer model architecture",
    credit: "Transformer architecture — Yuening Jia, CC BY-SA 3.0"
  },
  "30 בנובמבר 2022": {
    src: "assets/images/history/chatgpt-logo.jpg",
    alt: "ChatGPT logo",
    credit: "ChatGPT logo — see image credits"
  }
};

function openHistoryModal(src, alt, caption) {
  const modal = document.querySelector("#imageModal");
  const modalImage = document.querySelector("#modalImage");
  const modalCaption = document.querySelector("#modalCaption");
  if (!modal || !modalImage || !modalCaption) return;

  modalImage.src = src;
  modalImage.alt = alt || "";
  modalCaption.textContent = caption || "";
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeHistoryModal() {
  const modal = document.querySelector("#imageModal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function bindHistoryModalImages() {
  document.querySelectorAll(".js-modal-image").forEach((figure) => {
    if (figure.dataset.bound === "true") return;
    figure.dataset.bound = "true";
    figure.addEventListener("click", (event) => {
      if (event.target.tagName.toLowerCase() === "a") return;
      const img = figure.querySelector("img");
      openHistoryModal(
        figure.dataset.full || img?.src,
        img?.alt,
        figure.dataset.caption || figure.querySelector("figcaption")?.textContent
      );
    });
  });
}

function addImagesToHistoryTimeline() {
  document.querySelectorAll("#fullTimelineList .timeline-item").forEach((item) => {
    if (item.dataset.historyImageAdded === "true") return;

    const year = item.querySelector(".timeline-year")?.textContent?.trim();
    const image = timelineImageMap[year];
    if (!image) return;

    const figure = document.createElement("figure");
    figure.className = "timeline-image js-modal-image";
    figure.dataset.full = image.src;
    figure.dataset.caption = image.credit;
    figure.innerHTML = `
      <img src="${image.src}" alt="${image.alt}" onerror="this.closest('.timeline-image').style.display='none'" />
      <figcaption>${image.credit} · <a href="docs/image-credits.md">Credits</a></figcaption>
    `;

    item.appendChild(figure);
    item.dataset.historyImageAdded = "true";
  });

  bindHistoryModalImages();
}

function waitForHistoryTimeline() {
  const timeline = document.querySelector("#fullTimelineList");
  if (!timeline) return;

  const observer = new MutationObserver(() => addImagesToHistoryTimeline());
  observer.observe(timeline, { childList: true });
  addImagesToHistoryTimeline();
}

document.addEventListener("DOMContentLoaded", () => {
  waitForHistoryTimeline();
  bindHistoryModalImages();

  document.querySelector(".modal-close")?.addEventListener("click", closeHistoryModal);
  document.querySelector("#imageModal")?.addEventListener("click", (event) => {
    if (event.target.id === "imageModal") closeHistoryModal();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeHistoryModal();
  });
});
