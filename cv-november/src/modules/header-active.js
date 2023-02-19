export function toActiveHeader() {
  let menuIcon = document.querySelector('.menu-img');
  let menuBox = document.querySelector('.page-header');
  let greyBox = document.querySelector('.menu-grey-background__box');

  menuIcon.addEventListener('click', function(){
    menuBox.classList.add('header-active');
    greyBox.classList.add('menu-grey__active');
  });

  greyBox.addEventListener('click', function(){
    menuBox.classList.remove('header-active');
    greyBox.classList.remove('menu-grey__active');
  });
}