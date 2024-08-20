import openMenu from './js/openMenu';
import accordionFaq from './js/faq';
import { toggleReviews } from './js/reviews';
import { openMobMenu } from './js/mobMenu.js';
import initCoversAnimation from './js/covers';
import { projectSwiper } from './js/projects.js';
import { submitWorkTogether } from './js/workTogether';
import './js/about';

import { scrollToTopBtn } from './js/scrollToTopBtn.js';
import 'modern-normalize/modern-normalize.css';

scrollToTopBtn();

// header
openMenu();

// mob-menu
openMobMenu();

// section reviews
toggleReviews();

// projects
projectSwiper();

// section covers
document.addEventListener('DOMContentLoaded', () => {
  initCoversAnimation();
});

// work-together
submitWorkTogether();
