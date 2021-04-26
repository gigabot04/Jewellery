'use strict';

if (document.querySelector(`.add`)) {
  const modalAdd = document.querySelector(`.add`);
  const closeBtn = document.querySelector(`.add__close-btn`);
  const continueBtn = document.querySelector(`.add__continue`);
  const overlay = document.querySelector(`.overlay`);
  const body = document.querySelector(`body`);
  const openBtn = document.querySelector(`.cart__add-cart`);
  const onModalEscPress = (evt) => {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      closeModalAdd(evt);
    }
  };
  const openModalAdd = (evt) => {
    evt.preventDefault();
    overlay.classList.add(`overlay--active`);
    modalAdd.classList.add(`add--active`);
    closeBtn.addEventListener(`click`, closeModalAdd);
    overlay.addEventListener(`click`, closeModalAdd);
    document.addEventListener(`keydown`, onModalEscPress);
    body.classList.add(`body__js`);
    continueBtn.focus();
  };
  const closeModalAdd = (evt) => {
    evt.preventDefault();
    overlay.classList.remove(`overlay--active`);
    modalAdd.classList.remove(`add--active`);
    closeBtn.removeEventListener(`click`, closeModalAdd);
    overlay.removeEventListener(`click`, closeModalAdd);
    document.removeEventListener(`keydown`, onModalEscPress);
    if (!document.querySelector(`.header__nav--active`)) {
      body.classList.remove(`body__js`);
    }
    openBtn.focus();
  };
  openBtn.addEventListener(`click`, openModalAdd);
}
