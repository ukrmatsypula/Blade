const links = document.querySelectorAll("a[data-scroll]");
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

if (links) {
  links.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
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

  if (isMenuExpanded) {
    isMenuExpanded.classList.remove("section-header--active-nav");
  }

  scroll({
    top: sectionScrollTopPosition - headerHeight,
    behavior: "smooth",
  });
}
