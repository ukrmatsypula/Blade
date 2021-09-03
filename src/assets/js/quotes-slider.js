const swiper = new Swiper(".slider-quotes-container", {
  spaceBetween: 30,
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: ".slider-quotes-container + .dots",
    clickable: true,
    renderBullet: function (index, className) {
      return `<li class="${className}"></li>`;
    },
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
  },
});
