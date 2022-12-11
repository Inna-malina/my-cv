import translate from "../modules/translater";

export default function toTranslater() {
  let lang = document.querySelector('.translate-block__list');
  let dataAttrs = document.querySelectorAll('[data-translater]');

  lang.addEventListener('click', function (elem) {
    let action = elem.target.dataset.leng;

    for (let key in translate[action]) {

      dataAttrs.forEach(function(attr) {
        if (attr.dataset.translater === key) {
          attr.textContent = translate[action][key];
        }
      });

    }
  });
}