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
    // // when window width is >= 320px
    // 320: {
    //   slidesPerView: 2,
    //   spaceBetween: 20
    // },
    // // when window width is >= 480px
    // 480: {
    //   slidesPerView: 3,
    //   spaceBetween: 30
    // },
    // // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
  },
});
