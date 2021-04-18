"use strict";
{
  const openMenuHeader = document.querySelector(`.header__btn-nav`);
  const headerWrap = document.querySelector(`.header__wrapper`);
  const logoWhiteHeader = document.querySelector(`.header__logo-svg-white`);
  const logoHeader = document.querySelector(`.header__logo-svg`);
  const cartWhiteHeader = document.querySelector(`.header__cart-svg-white`);
  const cartHeader = document.querySelector(`.header__cart-svg`);
  const navheader = document.querySelector(`.header__nav`);

  openMenuHeader.addEventListener(`click`, () => {
    headerWrap.classList.toggle(`header__wrapper--active`);
    logoWhiteHeader.classList.toggle(`header__logo-svg-white--active`);
    logoHeader.classList.toggle(`header__logo-svg--disable`);
    cartWhiteHeader.classList.toggle(`header__cart-svg-white--active`);
    cartHeader.classList.toggle(`header__cart-svg--disable`);
    navheader.classList.toggle(`header__nav--active`);
  });
}
