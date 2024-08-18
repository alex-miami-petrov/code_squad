import Accord from 'accordion-js';
import Swiper from 'swiper';
import 'swiper/css';

import { Keyboard, Mousewheel, Navigation } from 'swiper/modules';

new Accord('.accord-container', {
  openOnInit: [0],
});

new Swiper('.slider', {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: '.button-next',
  },
  centeredSlides: false,
  loop: true,
  spaceBetween: 0,
  slidesPerView: 2,
  width: 260,
  breakpoints: {
    768: {
      slidesPerView: 3,
      width: 600,
    },
    1440: {
      slidesPerView: 6,
      width: 1200,
    },
  },
});