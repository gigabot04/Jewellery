'use strict';

if (document.querySelector(`.cart__toggle`)) {
  const tabBtn = document.querySelectorAll(`.cart__btn-info`);
  const listWrap = document.querySelectorAll(`.cart__item`);

  for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener(`click`, (evt) => {
      evt.preventDefault();
      for (let j = 0; j < tabBtn.length; j++) {
        tabBtn[j].classList.remove(`cart__btn-info--active`);
        listWrap[j].classList.remove(`cart__item--active`);
      }
      listWrap[i].classList.add(`cart__item--active`);
      tabBtn[i].classList.add(`cart__btn-info--active`);
    });
  }
}
