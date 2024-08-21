import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// swiper from section REVIEWS
export function createSwiperReviews() {
  const revSwiper = new Swiper('.rev-swiper', {
    modules: [Navigation, Keyboard, Mousewheel],
    on: {
      init: function () {
        const disBtn = document.querySelector('.swiper-button-disabled');
        disBtn.disabled = true;
      },
      toEdge: function (swiper) {
        const disBtn = document.querySelector('.swiper-button-disabled');
        disBtn.disabled = true;
      },
      fromEdge: function (swiper) {
        const disBtnN = document.querySelector('.rev-next');
        const disBtnP = document.querySelector('.rev-prev');
        disBtnN.disabled = false;
        disBtnP.disabled = false;
      },
    },
    navigation: {
      nextEl: '.rev-next',
      prevEl: '.rev-prev',
    },
    grabCursor: true,
    mousewheel: false,
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
