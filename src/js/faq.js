import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionFaq = new Accordion('.accordion-container', {
  duration: 600,
  customHeight: 500,
});

export default accordionFaq;
