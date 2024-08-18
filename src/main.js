import openMenu from './js/openMenu';
import accordionFaq from './js/faq';
import { toggleReviews } from './js/reviews';
import { submitWorkTogether } from './js/workTogether';
import './js/about';
import { scrollToTopBtn } from './scrollToTopBtn.js';

scrollToTopBtn();

// header
openMenu();

// faq
accordionFaq;

//  section Reviews
toggleReviews();

// work-together
submitWorkTogether();
