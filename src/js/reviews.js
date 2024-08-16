import { createSwiperReviews } from './createSwiper.js';

export function toggleReviews() {
  let revElem = document.getElementById('rev');
  let titleElem = revElem.querySelector('.rev-title');
  console.log('1');
  titleElem.onclick = function () {
    revElem.classList.toggle('open');
  };

  createSwiperReviews();
}
