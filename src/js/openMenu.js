export default function openMenu() {
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  const menuLinks = document.querySelectorAll('.menu-link');

  function toggleMenu() {
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }

  function closeMenu() {
    menu.style.display = 'none';
  }

  menuBtn.addEventListener('click', function (event) {
    toggleMenu();
    event.stopPropagation();
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });

  document.addEventListener('click', function (event) {
    if (
      menu.style.display === 'block' &&
      !menu.contains(event.target) &&
      event.target !== menuBtn
    ) {
      closeMenu();
    }
  });
}
