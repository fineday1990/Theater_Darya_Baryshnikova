'use strict';
//меню гамбургер
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav-menu'),
        menuItem = document.querySelectorAll('.nav-menu__list-item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
    });

    menuItem.forEach((item) => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
        });
    });
});

//плавный скролл
function addSmoothScroll(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    addSmoothScroll(anchor);
});

//плавный переход с кнопки в первой секции "Записаться в группу"
addSmoothScroll(document.querySelector('.btn-contacts'));
//плавный переход с кнопки в третей секции "Записаться в группу"
addSmoothScroll(document.querySelector('.btn-contacts2'));

var phoneMask = IMask(document.getElementById('formPhone'), {
    mask: '+{7}(000)000-00-00',
});
