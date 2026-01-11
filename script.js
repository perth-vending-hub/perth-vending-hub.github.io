// Small JS effect: change coming soon dots
const comingSoon = document.querySelector('.coming-soon');
let dots = 0;

setInterval(() => {
  dots = (dots + 1) % 4;
  comingSoon.textContent = '🚀 COMING SOON' + '.'.repeat(dots) + ' 🚀';
}, 600);

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
// Carousel
// =============================

// Put your images inside this folder:
// carousel_images/
// Example file names:
// carousel1.jpg, carousel2.jpg, etc

// IMPORTANT: Browsers cannot auto-read folder contents.
// You must list filenames here:
const carouselImages = [
  "carousel_images/7.png",
  "carousel_images/9.png"
];

let currentIndex = 0;
const imgEl = document.getElementById("carouselImage");
const dotsContainer = document.getElementById("carouselDots");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

// Create dots
const dotsEls = carouselImages.map((_, idx) => {
  const dot = document.createElement("button");
  dot.addEventListener("click", () => goTo(idx));
  dotsContainer.appendChild(dot);
  return dot;
});

function render() {
  // fade effect
  imgEl.style.opacity = "0";
  setTimeout(() => {
    imgEl.src = carouselImages[currentIndex];
    imgEl.style.opacity = "1";
  }, 150);

  dotsEls.forEach((d, i) => d.classList.toggle("active", i === currentIndex));
}

function goTo(index) {
  currentIndex = index;
  render();
}

function next() {
  currentIndex = (currentIndex + 1) % carouselImages.length;
  render();
}

function prev() {
  currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
  render();
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

// Auto-play every 3 seconds
setInterval(next, 3000);

// Initial load
render();
