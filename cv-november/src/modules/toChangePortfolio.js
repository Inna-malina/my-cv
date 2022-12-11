import portfolio from "./portfolio";

export function toChangePortfolio() {
  let carouselElements = document.querySelectorAll('.carousel-element');

  carouselElements.forEach(function (element) {
    element.addEventListener('click', function (event) {
      let action = event.target;
      disabled();
      action.classList.add('active');
    });
  });

  function disabled() {
    carouselElements.forEach(function (element) {
      element.classList.remove('active');
    });
  }
}