import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const links = document.querySelectorAll("a[data-scroll]");
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

if (links) {
  links.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      links.forEach((item) => {
        item.classList.remove("nav-wrapper__item-link--active");
      });

      item.classList.add("nav-wrapper__item-link--active");

      const isSectionNames = item.dataset["scroll"];

      if (isSectionNames) {
        clickHandler(isSectionNames);
      }
    });
  });
}

function clickHandler(currentSection) {
  const section = document.querySelector(`#${currentSection}`);
  const sectionScrollTopPosition = section.offsetTop;
  const isMenuExpanded = document.querySelector(".section-header--active-nav");
  const isBodyNoScroll = document.querySelector(".no-scroll");

  if (isMenuExpanded && isBodyNoScroll) {
    isMenuExpanded.classList.remove("section-header--active-nav");
    isBodyNoScroll.classList.remove("no-scroll");
  }

  scroll({
    top: sectionScrollTopPosition - headerHeight,
    behavior: "smooth",
  });
}
