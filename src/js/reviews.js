import { getReviews } from './funcAPI.js';
import { createMarkupReviews } from './renderFunctions.js';
import { createSwiperReviews } from './createSwipers.js';

export function toggleReviews() {
  let revElem = document.getElementById('rev');
  let titleElem = revElem.querySelector('.rev-title');

  titleElem.onclick = function () {
    revElem.classList.toggle('close');
  };

  window.onload = () => {
    let revSection = document.querySelector('.rev-container');

    let observer = new IntersectionObserver(
      () => {
        const revUl = document.querySelector('.rev-list');
        const revError = document.querySelector('.rev-error');

        getReviews()
          .then(data => {
            const marcup = createMarkupReviews(data);
            revUl.innerHTML = marcup;
            const revSwiper = createSwiperReviews();
            const revBtns = document.querySelectorAll('.rev-button');
            revBtns.forEach(btn => {
              btn.classList.remove('visually-hidden');
            });
            revError.classList.add('visually-hidden');
            // console.log('1');
          })
          .catch(err => {
            // let revError = document.querySelector('.rev-error');
            revError.classList.remove('visually-hidden');
            // console.log('2');
          });

        observer.unobserve(revSection);
      },

      { threshold: 0.2 }
    );

    observer.observe(revSection);
  };
}
