export function toChangeScreen() {

  let menuElements = document.querySelectorAll('.js-menu-link');
  let screens = document.querySelectorAll('.screen');

  menuElements.forEach(function (element) {
    element.addEventListener('click', function () {
      screens.forEach(function (screen) {
        if(element.dataset.menu === screen.dataset.menu){
          screen.classList.remove('screen--hidden');
        }
        else{
          screen.classList.add('screen--hidden');
        }
      });
    });
  });

}