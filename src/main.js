import openMenu from './js/openMenu';
import { toggleReviews } from './js/reviews';
import initCoversAnimation from './js/covers';

openMenu();

//  section Reviews
toggleReviews();

// section covers 
document.addEventListener('DOMContentLoaded', () => {
    initCoversAnimation();  // Викликаємо анімацію covers
});