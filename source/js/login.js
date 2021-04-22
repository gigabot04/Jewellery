'use strict';
{
  if (document.querySelector(`.login`)) {
    const modalLogin = document.querySelector(`.login`);
    const closeBtn = modalLogin.querySelector(`.login__close`);
    const overlay = document.querySelector(`.overlay`);
    const body = document.querySelector(`body`);
    const openBtn = document.querySelector(`.header__login`);
    const inputEmail = modalLogin.querySelector(`input#email`);
    const inputPass = modalLogin.querySelector(`input#pass`);
    const onModalEscPress = (evt) => {
      if (evt.key === `Escape`) {
        evt.preventDefault();
        closeModalAdd(evt);
      }
    };
    const openModalAdd = (evt) => {
      evt.preventDefault();
      overlay.classList.add(`overlay-active`);
      modalLogin.classList.add(`login-active`);
      closeBtn.addEventListener(`click`, closeModalAdd);
      overlay.addEventListener(`click`, closeModalAdd);
      document.addEventListener(`keydown`, onModalEscPress);
      body.classList.add(`body__js`);
      if (inputEmail.value) {
        inputPass.focus();
      } else {
        inputEmail.focus();
      }

    }
    const closeModalAdd = (evt) => {
      evt.preventDefault();
      overlay.classList.remove(`overlay-active`);
      modalLogin.classList.remove(`login-active`);
      closeBtn.removeEventListener(`click`, closeModalAdd);
      overlay.removeEventListener(`click`, closeModalAdd);
      document.removeEventListener(`keydown`, onModalEscPress);
      body.classList.remove(`body__js`);
      openBtn.focus();
    }
    openBtn.addEventListener(`click`, openModalAdd);
  }
}
