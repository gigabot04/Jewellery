'use strict';
{
  const ask = document.querySelector(`.ask`);
  ask.addEventListener(`click`, (evt) => {
    let target = evt.target;
    if (target.classList.contains(`ask__btn`)) {
      document.querySelector(`.ask__btn--active`).classList.remove(`ask__btn--active`);
      target.classList.add(`ask__btn--active`);
    }
  })
}
