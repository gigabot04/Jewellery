"use strict";
{
  const openMenuHeader = document.querySelector(`.header__btn-nav`);
  const headerWrap = document.querySelector(`.header__wrapper`);
  const logoHeader = document.querySelector(`.header__logo-svg`);
  const cartHeader = document.querySelector(`.header__cart-svg`);
  const navheader = document.querySelector(`.header__nav`);
  const body = document.querySelector(`body`);
  const search = document.querySelector(`.header__search`);
  document.querySelector(`.header--no-js`).classList.remove(`header--no-js`);

  openMenuHeader.addEventListener(`click`, () => {
    headerWrap.classList.toggle(`header__wrapper--active`);
    logoHeader.classList.toggle(`header__logo-svg--white`);
    cartHeader.classList.toggle(`header__cart-svg--white`);
    search.classList.toggle(`header__search--nav`);
    navheader.classList.toggle(`header__nav--active`);
    body.classList.toggle(`body__js`);
  });
}
