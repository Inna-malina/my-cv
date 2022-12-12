import portfolio from "./portfolio";

export function toChangePortfolio() {
  let carouselElements = document.querySelectorAll('.carousel-element');
  let linkContentImg = document.querySelector('.portfolio-content-img__box');
  let contentImg = document.querySelector('.portfolio-content-img__box img');
  let contentTitle = document.querySelector('.description-title a');
  let contentText = document.querySelector('.description-text');
  let linkGithab = document.querySelector('.project-link__githab a');
  let linkProject = document.querySelector('.project-link__project a');

  carouselElements.forEach(function (element) {
    element.addEventListener('click', function (event) {
      let action = event.target;
      disabled();
      action.classList.add('active');
      for (let key in portfolio) {
        //key - "rs-school","animation","react","others" 
        for(let elem in portfolio[key]){
          // elem - "pet-story","song-film","portfolio";
          if(action.dataset.portfolio === elem){
            linkContentImg.href = portfolio[key][elem].linkproject;
            contentImg.src = portfolio[key][elem].imgsrc; 
            contentImg.style.height = portfolio[key][elem].imgheight; 
            contentTitle.textContent = portfolio[key][elem].top;
            contentText.textContent = portfolio[key][elem].text; 
            linkGithab.src = portfolio[key][elem].githubcode; 
            linkProject.href = portfolio[key][elem].linkproject; 
          }
          
        }
       
      }

    });
  });

  function disabled() {
    carouselElements.forEach(function (element) {
      element.classList.remove('active');
    });
  }
}