export function openMobMenu() {
  document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const mobMenu = document.querySelector('.mob-menu');
    const closeMobMenu = document.querySelector('.close-mob-menu');
    const navMobMenu = document.querySelector('.nav-mob-menu');

    burger.addEventListener('click', function () {
      mobMenu.classList.add('active');
    });

    closeMobMenu.addEventListener('click', function () {
      mobMenu.classList.remove('active');
    });

    navMobMenu.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });

          mobMenu.classList.remove('active');
        }
      }
    });
  });
}
