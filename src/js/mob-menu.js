// const openBtn = document.querySelector('.open-menu-btn'); --------------- 
const menu = document.querySelector('.mobile-menu');
const menuContainer = document.querySelector('.mobile-menu-container');
const menuCloseBtn = document.querySelector('.mobile-menu-close-btn');
const menuLinks = document.querySelectorAll('.mobile-nav-menu-item-content');

openBtn.addEventListener('click', function () {
    menu.classList.toggle('is-open');
})

document.addEventListener('DOMContentLoaded', function () {
    menuCloseBtn.addEventListener('click', function() {
        menu.classList.toggle('is-open');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuContainer.classList.toggle('is-open');
        });
    });
});
