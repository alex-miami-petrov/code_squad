import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// swiper from section REVIEWS
export function createSwiperReviews() {
  return new Swiper('.rev-swiper', {
    modules: [Navigation, Keyboard],

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
    on: {
      toEdge: function () {},
    },
    on: {
      reachEnd: function () {
        let btnNx = this.nextEl;
        // btnNx.classList.add('rev-next-disabled');
        // btnNx.disabled = true;
        console.log(btnNx);
      },
    },
    on: {
      fromEdge: function () {
        let btnPr = this.prevEl;
        let btnNx = this.nextEl;
        console.log(this.realIndex);
        // btnPr.disabled = false;
        // btnNx.disabled = false;
        // btnPr.classList.remove('rev-per-disabled');
        // btnNx.classList.remove('rev-next-enabled');
      },
    },
  });

  // swiper.clickedIndex = 5;
  // swiper.realIndex; Індексний номер поточного активного слайда
}
