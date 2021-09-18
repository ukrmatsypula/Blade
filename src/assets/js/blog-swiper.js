const swiper = new Swiper(".slider-blog-container", {
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: ".section-blog .dots",
    clickable: true,
    renderBullet: function (index, className) {
      return `<li class="${className}"></li>`;
    },
  },
  navigation: {
    nextEl: ".btn-blog--next",
    prevEl: ".btn-blog--prev",
  },
});
