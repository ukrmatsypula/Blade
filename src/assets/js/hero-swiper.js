const swiper = new Swiper(".section-hero-image", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<li class="${className}"></li>`;
    },
  },
});
