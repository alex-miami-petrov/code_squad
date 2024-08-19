import openMenu from './js/openMenu';
import accordionFaq from './js/faq';
import { toggleReviews } from './js/reviews';
import { openMobMenu } from './js/mobMenu.js';
import initCoversAnimation from './js/covers';

import { submitWorkTogether } from './js/workTogether';
import './js/about';

import { scrollToTopBtn } from './js/scrollToTopBtn.js';
import 'modern-normalize/modern-normalize.css';

scrollToTopBtn();

// header
openMenu();

// mob-menu

openMobMenu();

//  section Reviews
toggleReviews();

// section covers
document.addEventListener('DOMContentLoaded', () => {
  initCoversAnimation(); // Викликаємо анімацію covers
});

// work-together
submitWorkTogether();
