import { getReviews } from './funcAPI.js';
import { createMarkupReviews } from './renderFunctions.js';
import { createSwiperReviews } from './createSwipers.js';

export function toggleReviews() {
  let revElem = document.getElementById('rev');
  let titleElem = revElem.querySelector('.rev-title');

  titleElem.onclick = function () {
    revElem.classList.toggle('close');
  };
  const revSection = document.querySelector('.rev-container');
  const revUl = document.querySelector('.rev-list');
  const revError = document.querySelector('.rev-error');
  const revBtns = document.querySelectorAll('.rev-button');

  window.onload = () => {
    const revObserver = new IntersectionObserver(
      () => {
        getReviews()
          .then(data => {
            const marcup = createMarkupReviews(data);
            revUl.innerHTML = marcup;
            createSwiperReviews();

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

        revObserver.unobserve(revSection);
      },

      { threshold: 0.2 }
    );

    revObserver.observe(revSection);
  };
}
