import portfolio from "./portfolio";

export function toChangePortfolio() {
  // let carouselElements = document.querySelectorAll('.carousel-element');
  let linkContentImg = document.querySelector('.portfolio-content-img__box');
  let contentImg = document.querySelector('.portfolio-content-img__box img');
  let contentTitle = document.querySelector('.description-title a');
  let contentText = document.querySelector('.description-text');
  let linkGithab = document.querySelector('.project-link__githab a');
  let linkProject = document.querySelector('.project-link__project a');

  let navElems = document.querySelectorAll('.portfolio-nav__box ul li');

  let carouselElements = document.querySelectorAll('.carousel-element');

  //Формируем основное оформление каждой страницы блока Мои работы (RS-School,Анимация,React,Разное)
  navElems.forEach(function (navElem) {

    navElem.addEventListener('click', function (event) {
      let action = event.target;
      disabledNav(navElems);
      action.classList.add('active-nav');

      let elementPortfolio = portfolio[action.dataset.portfolio];
      // console.log(Object.values(elementPortfolio)[0]);      
      let info = Object.values(elementPortfolio)[0];
      linkContentImg.href = info.linkproject;
      contentImg.src = info.imgsrc;
      contentImg.style.height = info.imgheight;
      contentTitle.textContent = info.top;
      contentText.textContent = info.text;
      linkGithab.src = info.githubcode;
      linkProject.href = info.linkproject;


      //Создаём элементы карусели
      let imagesCarousel = document.querySelectorAll('.carousel-element');
      removeImg(imagesCarousel); //но перед созданием картинок нужно удалить предыдущий набор

      let carouselField = document.querySelector('.carousel-field');
      let imgCarousel = elementPortfolio.carousel;
      for (let i = 1; i <= imgCarousel.length; i++) {
        let imgElem = document.createElement('img');
        imgElem.className = "carousel-element";
        imgElem.dataset.portfolio = `portfolio-${i}`;
        imgElem.dataset.container = action.dataset.portfolio;
        imgElem.src = `assets/${action.dataset.portfolio}-carousel__${i}.jpg`;
        carouselField.append(imgElem);
        if (imgElem.dataset.portfolio == "portfolio-1") {
          imgElem.classList.add('active-carousel');
        }
        imgElem.addEventListener('click', function (event) {
          let action = event.target;
          for (let key in portfolio) {
            // key - "rs-school","animation","react","others" 
            for (let elem in portfolio[key]) {
              // elem - "pet-story","song-film","portfolio";
              if (action.dataset.portfolio === elem && action.dataset.container === key) {
                linkContentImg.href = portfolio[key][elem].linkproject;
                contentImg.src = portfolio[key][elem].imgsrc;
                contentImg.style.height = portfolio[key][elem].imgheight;
                contentTitle.textContent = portfolio[key][elem].top;
                contentText.textContent = portfolio[key][elem].text;
                linkGithab.href = portfolio[key][elem].githubcode;
                linkProject.href = portfolio[key][elem].linkproject;
              }
            }
          }
        });
      }
    });

  });




  // По клику на картинку карусели, происходит смена контента в блоке
  carouselElements.forEach(function (element) {
    element.addEventListener('click', function (event) {
      let action = event.target;
      disabled(carouselElements);
      action.classList.add('active-carousel');
      for (let key in portfolio) {
        // key - "rs-school","animation","react","others" 
        for (let elem in portfolio[key]) {
          // elem - "pet-story","song-film","portfolio";
          if (action.dataset.portfolio === elem && action.dataset.container === key) {
            linkContentImg.href = portfolio[key][elem].linkproject;
            contentImg.src = portfolio[key][elem].imgsrc;
            contentImg.style.height = portfolio[key][elem].imgheight;
            contentTitle.textContent = portfolio[key][elem].top;
            contentText.textContent = portfolio[key][elem].text;
            linkGithab.href = portfolio[key][elem].githubcode;
            linkProject.href = portfolio[key][elem].linkproject;
          }
        }
      }
    });
  });

  function disabled(blocks) {
    blocks.forEach(function (element) {
      element.classList.remove('active-carousel');
    });
  }

  function disabledNav(blocks) {
    blocks.forEach(function (element) {
      element.classList.remove('active-nav');
    });
  }

  function removeImg(images) {
    images.forEach(function (img) {
      img.remove();
    });
  }
}