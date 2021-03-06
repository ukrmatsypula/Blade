const swiper = new Swiper(".section-hero-image", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination.dots",
    clickable: true,
    renderBullet: function (index, className) {
      return `<li class="${className}"></li>`;
    },
  },
});
