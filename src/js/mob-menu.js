document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu');
  const navMenu = document.querySelector('.nav-menu');

  menu.addEventListener('click', function () {
    menu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navMenu.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      menu.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
});
