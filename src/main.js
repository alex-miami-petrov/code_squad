import openMenu from './js/openMenu';
import accordionFaq from './js/faq';
import { toggleReviews } from './js/reviews';

import initCoversAnimation from './js/covers';

import { submitWorkTogether } from './js/workTogether';
import './js/about';
import { accordionAbout } from './js/about.js';

import { scrollToTopBtn } from './js/scrollToTopBtn.js';
import 'modern-normalize/modern-normalize.css';

scrollToTopBtn();

// header
openMenu();

//  section Reviews
toggleReviews();

// section covers
document.addEventListener('DOMContentLoaded', () => {
  initCoversAnimation(); // Викликаємо анімацію covers
});

// work-together
submitWorkTogether();
