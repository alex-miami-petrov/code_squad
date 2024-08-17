import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { addRequest } from './funcAPI';

export function submitWorkTogether() {
  const STORAGE_KEY = 'work-together-form';
  const formEl = document.querySelector('#js-work-together-form');
  const backdropEl = document.querySelector('.backdrop');
  const closeSuccess = document.querySelector('#close-success');
  let savedFeedbackData = {};

  formEl.addEventListener('submit', async function (event) {
    event.preventDefault();

    backdropEl.classList.add('visually-hidden');
    try {
      const response = await addRequest(savedFeedbackData);
      console.log(savedFeedbackData);

      if (response.ok) {
        backdropEl.classList.remove('visually-hidden');
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
      } else {
        throw new Error('Server responded with an error');
      }
    } catch (error) {
      backdropEl.classList.add('visually-hidden');
      iziToast.error({
        maxWidth: '370px',
        position: 'topRight',
        messageColor: 'white',
        backgroundColor: 'red',
        message: 'Sorry, there was an error connecting to the server!',
      });
      console.error(error);
    }
  });

  formEl.addEventListener('input', function (event) {
    const value = event.target.value;
    const key = event.target.name;

    try {
      savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (err) {
      console.log(err);
      return;
    }

    savedFeedbackData[key] = value;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedFeedbackData));
    } catch (err) {
      console.log(err);
      return;
    }
  });

  function populateForm() {
    try {
      savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (err) {
      console.log(err);
      return;
    }

    if (!savedFeedbackData) {
      return;
    }

    for (const key in savedFeedbackData) {
      if (formEl.elements[key]) {
        formEl.elements[key].value = savedFeedbackData[key];
      }
    }
  }

  populateForm();
}
