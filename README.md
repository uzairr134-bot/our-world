const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    caption: "The day our smiles felt like home."
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    caption: "A little laugh, a lot of love."
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
    caption: "Our favorite kind of peace."
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80",
    caption: "Moments that make my heart pause."
  },
  {
    src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80",
    caption: "You are my favorite view."
  },
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80",
    caption: "Every day with you feels like a story worth keeping."
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
  ![image alt](https://github.com/uzairr134-bot/our-world/blob/a74ae3524ce51bf027699d1676e58aa505247cbe/UZAIR%2022.jpeg)
  ![image alt](https://github.com/uzairr134-bot/our-world/blob/b323f116feb7e257aee16d49cfa2c1b05c177dbe/UZAIR23.jpeg)




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
