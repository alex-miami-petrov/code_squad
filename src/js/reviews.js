import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
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

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          getReviews()
            .then(data => {
              const marcup = createMarkupReviews(data);
              revUl.innerHTML = marcup;
              createSwiperReviews();

              revBtns.forEach(btn => {
                btn.classList.remove('visually-hidden');
              });
              revError.classList.add('visually-hidden');
            })
            .catch(err => {
              revError.classList.remove('visually-hidden');

              iziToast.error({
                title: 'Server error',
                titleSize: '20',
                position: 'bottomCenter',
                theme: 'dark',
                backgroundColor: '#CD5C5C',
                messageSize: '16',
                messageColor: '#FFFFFF',
                message: 'Data not available',
              });
            });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.8 }
  );

  observer.observe(revSection);
}
