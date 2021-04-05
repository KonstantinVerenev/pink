var swiper = new Swiper('.swiper-container', {
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination-1',
  },
  navigation: {
    nextEl: '.reviews-btn--next',
    prevEl: '.reviews-btn--prev',
  },
});

var swiper2 = new Swiper('.swiper-container-2', {
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination-2',
  }
});
