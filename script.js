const cards = [
  { id: 1024, title: "Card 1", tall: false },
  { id: 1069, title: "Card 2", tall: true },
  { id: 1018, title: "Card 3", tall: false },
  { id: 1062, title: "Card 4", tall: true },
  { id: 1044, title: "Card 5", tall: false },
  { id: 1025, title: "Card 6", tall: true },
  { id: 1074, title: "Card 7", tall: false },
  { id: 1070, title: "Card 8", tall: true },
  { id: 1084, title: "Card 9", tall: false },
  { id: 237, title: "Card 10", tall: true },
  { id: 593, title: "Card 11", tall: false },
  { id: 433, title: "Card 12", tall: true },
];

function buildCardMarkup({ id, title, tall }) {
  const thumbSize = tall ? "600/840" : "600/420";
  const fullSize = tall ? "1600/2200" : "1600/1100";
  const thumbUrl = `https://picsum.photos/id/${id}/${thumbSize}.jpg`;
  const fullUrl = `https://picsum.photos/id/${id}/${fullSize}.jpg`;

  return `
    <a class="card glightbox" href="${fullUrl}" data-type="image" data-gallery="animals" data-title="${title}">
      <img src="${thumbUrl}" alt="${title}" loading="lazy" />
      <span class="card__meta">
        <b>Add card title</b>
        <small>Description goes here</small>
      </span>
    </a>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector("#masonryGallery");

  if (!gallery) {
    return;
  }

  gallery.innerHTML = cards.map(buildCardMarkup).join("");

  if (typeof GLightbox === "function") {
    GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
      openEffect: "zoom",
      closeEffect: "fade",
      zoomable: true,
    });
  }
});
