import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// swiper from section REVIEWS
export function createSwiperReviews() {
  const revSwiper = new Swiper('.rev-swiper', {
    modules: [Navigation, Keyboard],
    on: {
      init: function () {
        const disBtn = document.querySelector('.swiper-button-disabled');
        disBtn.classList.add('rev-button-disabled');
      },
      toEdge: function (swiper) {
        const disBtn = document.querySelector('.swiper-button-disabled');
        disBtn.classList.add('rev-button-disabled');
      },
      fromEdge: function (swiper) {
        const disBtn = document.querySelector('.rev-button-disabled');
        disBtn.classList.remove('rev-button-disabled');
      },
    },
    navigation: {
      nextEl: '.rev-next',
      prevEl: '.rev-prev',
    },
    grabCursor: true,
    // mousewheel: {
    //   invert: true,
    // },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    slidesPerView: 1,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  });
}
