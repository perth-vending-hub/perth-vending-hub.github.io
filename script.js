// =============================
// Coming soon dots animation
// =============================
const comingSoon = document.querySelector('.coming-soon');
let dots = 0;

setInterval(() => {
  dots = (dots + 1) % 4;
  comingSoon.textContent = '🚀 COMING SOON' + '.'.repeat(dots) + ' 🚀';
}, 600);

// =============================
// Multi-image carousel strip
// =============================

// IMPORTANT: Browsers cannot auto-read folder contents.
// You must list filenames here:
const carouselImages = [
  "carousel_images/tile (1).png",
  "carousel_images/tile (2).png",
  "carousel_images/tile (3).png",
  "carousel_images/tile (4).png",
  "carousel_images/tile (5).png",
  "carousel_images/tile (6).png",
  "carousel_images/tile (7).png",
  "carousel_images/tile (8).png",
  "carousel_images/tile (9).png",
  "carousel_images/tile (10).png",
  "carousel_images/tile (11).png",
  "carousel_images/tile (12).png"
];

const track = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("carouselPrev");
const nextBtn = document.getElementById("carouselNext");

// Safety checks (prevents errors if IDs not present)
if (track && prevBtn && nextBtn) {
  // Build items into the strip
  carouselImages.forEach((src, idx) => {
    const item = document.createElement("div");
    item.className = "carousel-item";

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Carousel image ${idx + 1}`;
    img.loading = "lazy";

    item.appendChild(img);
    track.appendChild(item);
  });

  // Scroll by ~one screen
  function scrollByPage(direction) {
    const amount = track.clientWidth * 0.9;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  prevBtn.addEventListener("click", () => scrollByPage(-1));
  nextBtn.addEventListener("click", () => scrollByPage(1));

  // Optional: mouse wheel scroll horizontally
  track.addEventListener("wheel", (e) => {
    // Convert vertical wheel to horizontal scroll
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      track.scrollBy({ left: e.deltaY, behavior: "auto" });
    }
  }, { passive: false });

  // auto-scroll every 3 seconds (uncomment if you want)
  setInterval(() => scrollByPage(1), 3000);
}
