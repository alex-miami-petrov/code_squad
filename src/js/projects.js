import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function projectSwiper() {
  new Swiper('.img-slider', {
    speed: 500,
    effect: 'cube',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewheel: false,
    keyboard: true,
  });
}
