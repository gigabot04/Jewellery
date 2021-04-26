'use strict';

if (document.querySelector(`.ask`)) {
  const ask = document.querySelector(`.ask`);
  const questions = document.querySelectorAll(`.ask__btn--active`);
  for (const question of questions) {
    question.classList.remove(`ask__btn--active`);
  }
  for (const question of document.querySelectorAll(`.ask__btn--active`)) {
    question.classList.remove(`ask__btn--active`);
  }
  ask.addEventListener(`click`, (evt) => {
    let target = evt.target;
    if (target.tagName === `BUTTON`) {
      target.classList.toggle(`ask__btn--active`);
    }
  });
}
