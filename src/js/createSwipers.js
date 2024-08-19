import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// swiper from section REVIEWS
export function createSwiperReviews() {
  let swiper = new Swiper('.rev-swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    // spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewheel: true,
    keyboard: true,
  });
}
