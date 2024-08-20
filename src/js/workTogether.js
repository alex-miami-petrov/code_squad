import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { addRequest } from './funcAPI';

const STORAGE_KEY = 'work-together-form';

export function submitWorkTogether() {
  const formEl = document.querySelector('#js-work-together-form');
  const backdropEl = document.querySelector('.backdrop');
  const closeModalBtn = document.querySelector('#close-success');
  const emailInputEl = document.querySelector('#work-together-input-email');
  const successMessageEl = document.querySelector('.line-text-succes');
  const errorMessageEl = document.querySelector('.line-text-error');
  const lineEl = document.querySelector('.line');
  let savedFeedbackData = loadFormData();

  formEl.addEventListener('submit', onSubmit);
  formEl.addEventListener('input', onInput);
  backdropEl.addEventListener('click', onBackdropClick);
  closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('keydown', onEscapePress);
  emailInputEl.addEventListener('input', validateEmail);

  populateForm(savedFeedbackData);

  function onInput(event) {
    const { name, value } = event.target;
    savedFeedbackData = { ...savedFeedbackData, [name]: value };
    saveFormData(savedFeedbackData);
  }

  function validateEmail() {
    if (emailInputEl.checkValidity()) {
      lineEl.classList.remove('error');
      lineEl.classList.add('succes');
      successMessageEl.classList.remove('visually-hidden');
      errorMessageEl.classList.add('visually-hidden');
    } else {
      lineEl.classList.remove('succes');
      lineEl.classList.add('error');
      successMessageEl.classList.add('visually-hidden');
      errorMessageEl.classList.remove('visually-hidden');
    }
  }

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await addRequest(savedFeedbackData);
      handleSuccess(response);
    } catch (error) {
      handleError(error);
    }
  }

  function handleSuccess(response) {
    backdropEl.classList.remove('visually-hidden');
    formEl.reset();
    localStorage.removeItem(STORAGE_KEY);
    lineEl.classList.remove('succes');
    successMessageEl.classList.add('visually-hidden');
    document.body.classList.add('modal-open');
  }

  function handleError(error) {
    iziToast.error({
      maxWidth: '370px',
      position: 'topRight',
      messageColor: 'white',
      backgroundColor: 'red',
      message:
        'Sorry, there was an error connecting to the server! Please correct your input and try again.',
    });
    console.error('Form submission error:', error.message);
  }

  function loadFormData() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (err) {
      console.log('Error loading form data:', err);
      return {};
    }
  }

  function saveFormData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (err) {
      console.log('Error saving form data:', err);
    }
  }

  function populateForm(data) {
    for (const [key, value] of Object.entries(data)) {
      if (formEl.elements[key]) {
        formEl.elements[key].value = value;
      }
    }
  }

  function closeModal() {
    backdropEl.classList.add('visually-hidden');
    document.body.classList.remove('modal-open');
  }

  function onBackdropClick(event) {
    if (event.target === backdropEl) {
      closeModal();
    }
  }

  function onEscapePress(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }
}
