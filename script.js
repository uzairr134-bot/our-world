const galleryImages = [
  {
    src: "UZAIR 22.jpeg",
    caption: "Our favorite smile."
  },
  {
    src: "UZAIR23.jpeg",
    caption: "Our sweetest memories."
  },
  {
    src: "WhatsApp Image 2026-10-06 at 11.59.07 AM.jpeg",
    caption: "A moment worth keeping forever."
  },
  {
    src: "WhatsApp Image 2026-10-06 at 12.00.09 PM (1).jpeg",
    caption: "The days we will always remember."
  }
];

const specialDays = [
  {
    title: "First hello",
    date: "Jan 15",
    note: "The day our story started and everything changed for the better."
  },
  {
    title: "Our first date",
    date: "Feb 02",
    note: "A simple evening that somehow felt like the beginning of forever."
  },
  {
    title: "Our anniversary",
    date: "5 Oct",
    note: "A reminder that love grows deeper, softer, and stronger with time."
  },
  {
    title: "Birthday together",
    date: "Aug 06",
    note: "The day we celebrated not just a birthday, but the joy of being in each other’s life."
  },
  {
    title: "Travel memories",
    date: "Sep 14",
    note: "When the world was new, and every moment felt like an adventure made for two."
  },
  {
    title: "Forever us",
    date: "Always",
    note: "The promise that no matter where life leads, my heart will always choose you."
  }
];

const galleryGrid = document.getElementById("gallery-grid");
const timeline = document.getElementById("timeline");
const year = document.getElementById("year");

if (galleryGrid) {
  galleryGrid.innerHTML = galleryImages
    .map(
      (image) => `
        <article class="gallery-item">
          <img src="${image.src}" alt="${image.caption}" />
          <div class="gallery-item__caption">${image.caption}</div>
        </article>
      `
    )
    .join("");
}

if (timeline) {
  timeline.innerHTML = specialDays
    .map(
      (day) => `
        <article class="timeline-item">
          <h3>${day.title}</h3>
          <span class="date">${day.date}</span>
          <p>${day.note}</p>
        </article>
      `
    )
    .join("");
}

if (year) {
  year.textContent = new Date().getFullYear();
}
