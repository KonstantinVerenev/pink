let mainNav = document.querySelector('.main-nav');
let openButton = document.querySelector('.additional-nav__toggle');
let closeButton = document.querySelector('.main-nav__toggle');

openButton.addEventListener('click', function () {
  mainNav.classList.remove('main-nav--closed');
  mainNav.classList.add('main-nav--opened');
})
closeButton.addEventListener('click', function () {
  mainNav.classList.remove('main-nav--opened');
  mainNav.classList.add('main-nav--closed');
})
