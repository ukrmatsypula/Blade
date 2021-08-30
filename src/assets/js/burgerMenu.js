// for burger menu and disable scroll
const header = document.querySelector(".section-header");

document.querySelector(".btn-burger").addEventListener("click", (event) => {
  header.classList.toggle("section-header--active-nav");

  document.body.classList.toggle("no-scroll");
});

// hide menu and disable class no-scroll when customer resizing our site
window.addEventListener("resize", () => {
  hideMenuAndEnableScroll();
});

const hideMenuAndEnableScroll = () => {
  const activeHeader = document.querySelector(".section-header--active-nav");

  if (document.body.classList.contains("no-scroll") && activeHeader) {
    document.body.classList.remove("no-scroll");
    activeHeader.classList.remove("section-header--active-nav");
  }
};
