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
