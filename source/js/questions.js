'use strict';
{
  if (document.querySelector(`.ask`)) {
    const ask = document.querySelector(`.ask`);
    const questions = document.querySelectorAll(`.ask__btn--active`);
    for (const question of questions) {
      question.classList.remove(`ask__btn--active`);
    }
    ask.addEventListener(`click`, (evt) => {
      let target = evt.target;
      for (const question of document.querySelectorAll(`.ask__btn--active`)) {
        question.classList.remove(`ask__btn--active`);
      }
      if (target.classList.contains(`ask__btn`)) {
        console.log(target);
        target.classList.toggle(`ask__btn--active`);
      }
    })
  }
}
