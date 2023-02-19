export function toChangeScreen() {

  let menuElements = document.querySelectorAll('.js-menu-link');
  let screens = document.querySelectorAll('.screen');

  menuElements.forEach(function (element) {
    element.addEventListener('click', function (event) {
      let action = event.target;
      toDeleteMenu (menuElements);
      action.classList.add('active-header-nav');
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

  function toDeleteMenu (elements){
    elements.forEach(function(elem){
      elem.classList.remove('active-header-nav');
    });
  }

}