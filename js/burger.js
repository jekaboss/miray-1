const burgerBtn = document.querySelector('.burger');
const menuBurger = document.querySelector('.header__menu-burger');

burgerBtn.addEventListener('click', e => {
    menuBurger.classList.toggle('_opened');
    burgerBtn.classList.toggle('active');
    if (menuBurger.classList.contains('_opened')) {
        document.querySelector('body').style.overflow = "hidden";
    } else {
        document.querySelector('body').style.overflow = "visible";
    }
})