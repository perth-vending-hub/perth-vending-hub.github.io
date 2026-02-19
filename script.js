// =============================
// Coming soon dots animation
// =============================
const comingSoon = document.querySelector('.coming-soon');
let dots = 0;

setInterval(() => {
  dots = (dots + 1) % 4;
  comingSoon.textContent = '🚀 FOLLOW US' + ' >'.repeat(dots);
}, 600);

// =============================
// 4 Single-image Carousels
// =============================

// Put images into folders like:
// carousel_images/drinks/...
// carousel_images/snacks/...
// carousel_images/icecream/...
// carousel_images/gacha/...

// Update these lists to your real filenames:
const carouselGroups = {
  drinks: [
    "carousel_images/drinks/1.png",
    "carousel_images/drinks/2.png",
    "carousel_images/drinks/3.png",
    "carousel_images/drinks/4.png",
    "carousel_images/drinks/5.png",
    "carousel_images/drinks/6.png",
    "carousel_images/drinks/7.png",
    "carousel_images/drinks/8.png",
    "carousel_images/drinks/9.png",
    "carousel_images/drinks/10.png",
    "carousel_images/drinks/11.png",
    "carousel_images/drinks/12.png",
    "carousel_images/drinks/13.png",
    "carousel_images/drinks/14.png",
    "carousel_images/drinks/15.png",
    "carousel_images/drinks/16.png",
    "carousel_images/drinks/17.png",
    "carousel_images/drinks/18.png",
  ],  
  snacks: [
    "carousel_images/snacks/1.png",
    "carousel_images/snacks/2.png",
    "carousel_images/snacks/3.png",
    "carousel_images/snacks/4.png",
    "carousel_images/snacks/5.png",
    "carousel_images/snacks/6.png",
    "carousel_images/snacks/7.png",
    "carousel_images/snacks/8.png",
    "carousel_images/snacks/9.png",
    "carousel_images/snacks/10.png",
    "carousel_images/snacks/11.png",
    "carousel_images/snacks/12.png"
  ],
  icecream: [
    "carousel_images/icecream/1.png",
    "carousel_images/icecream/2.png",
    "carousel_images/icecream/3.png"
  ],
  blindboxes: [  // 👈 CHANGED from "gacha" to match HTML
    "carousel_images/blindboxes/1.png",
    "carousel_images/blindboxes/2.png",
    "carousel_images/blindboxes/3.png",
    "carousel_images/blindboxes/4.png",
    "carousel_images/blindboxes/5.png",
    "carousel_images/blindboxes/6.png",
    "carousel_images/blindboxes/7.png",
    "carousel_images/blindboxes/8.png",
    "carousel_images/blindboxes/9.png",
    "carousel_images/blindboxes/10.png"
  ],
  essentials: [
    "carousel_images/essentials/1.png",
    "carousel_images/essentials/2.png",
    "carousel_images/essentials/3.png"
  ],
  gacha: [
    "carousel_images/gacha/1.png",
    "carousel_images/gacha/2.png",
    "carousel_images/gacha/3.png",
    "carousel_images/gacha/4.png",
    "carousel_images/gacha/5.png"    
  ]
};




function initSingleCarousel(cardEl, images, autoPlayMs = 3000) {
  if (!cardEl || !images || images.length === 0) return;

  const imgEl = cardEl.querySelector(".carousel-image");
  const dotsContainer = cardEl.querySelector(".carousel-dots");

  let currentIndex = 0;
  let timer = null;

  // Dots
  dotsContainer.innerHTML = "";
  const dotEls = images.map((_, idx) => {
    const dot = document.createElement("button");
    dot.addEventListener("click", () => goTo(idx));
    dotsContainer.appendChild(dot);
    return dot;
  });

  function render() {
    imgEl.style.opacity = "0";
    setTimeout(() => {
      imgEl.src = images[currentIndex];
      imgEl.style.opacity = "1";
    }, 120);

    dotEls.forEach((d, i) => d.classList.toggle("active", i === currentIndex));
  }

  function goTo(index) {
    currentIndex = index;
    render();
  }

  function next() {
    currentIndex = (currentIndex + 1) % images.length; // loop
    render();
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    render();
  }


  // Autoplay + pause on hover
  if (autoPlayMs && autoPlayMs > 0) {
    timer = setInterval(next, autoPlayMs);

    cardEl.addEventListener("mouseenter", () => {
      if (timer) clearInterval(timer);
      timer = null;
    });

    cardEl.addEventListener("mouseleave", () => {
      if (!timer) timer = setInterval(next, autoPlayMs);
    });
  }

  render();
}

// Init all 6
document.querySelectorAll(".carousel-card").forEach((card) => {
  const key = card.getAttribute("data-carousel");
  initSingleCarousel(card, carouselGroups[key], 3000);
});