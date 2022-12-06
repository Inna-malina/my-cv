export function toMooveAnimate() {
  let myPhoto = document.querySelector('.photo__box');

  myPhoto.addEventListener('click', function(){
    myPhoto.classList.remove('turn-animate');
    myPhoto.classList.add('moove-animate');

    setTimeout (function (){
      myPhoto.classList.remove('moove-animate');
      myPhoto.classList.add('turn-animate');
    }, 5000 );
  });
}