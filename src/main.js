import openMenu from './js/openMenu';
import accordionFaq from './js/faq';
import { toggleReviews } from './js/reviews';
import { submitWorkTogether } from './js/workTogether';
import './js/about';
import { scrollToTopBtn } from './js/scrollToTopBtn.js';
import 'modern-normalize/modern-normalize.css';

scrollToTopBtn();



// header
openMenu();

//  section Reviews
toggleReviews();

// work-together
submitWorkTogether();
