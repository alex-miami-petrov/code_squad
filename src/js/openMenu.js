export default function openMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  const menuLinks = document.querySelectorAll('.menu-link');

  menuBtn.addEventListener('click', function () {
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }

    menuLinks.forEach(link => {
      link.addEventListener('click', function () {
        menu.style.display = 'none';
      });
    });
  });
}
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
