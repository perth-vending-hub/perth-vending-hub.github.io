// Small JS effect: change coming soon dots
const comingSoon = document.querySelector('.coming-soon');
let dots = 0;

setInterval(() => {
  dots = (dots + 1) % 4;
  comingSoon.textContent = '🚀 COMING SOON' + '.'.repeat(dots) + ' 🚀';
}, 600);
