import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

new Swiper('.img-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
  keyboard: true,
});
