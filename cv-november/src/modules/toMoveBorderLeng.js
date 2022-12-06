export function toMooveBorderLang (){
    let ruLang = document.querySelector('.lang-ru');
    let enLang = document.querySelector('.lang-en');
    let borderLang = document.querySelector('.border-lang');

    ruLang.addEventListener('click', function(){
        borderLang.classList.remove('active-en');
        borderLang.classList.add('active-ru');
    });

    enLang.addEventListener('click', function(){
        borderLang.classList.remove('active-ru');
        borderLang.classList.add('active-en');
    });
}