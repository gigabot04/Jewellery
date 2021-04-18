// "use strict";
// {
//   const form = document.querySelector(`.popup-call__form--js`);
//   const inputName = document.querySelector(`.popup-call input#popup-call__name`);
//   const inputTel = document.querySelector(`.popup-call input#popup-call__tel`);
//   const inputText = document.querySelector(`.popup-call textarea`);
//   let storageName = ``;
//   let storageTel = ``;
//   let storageText = ``;
//   let isStorageSupport = true;
//   try {
//     storageName = localStorage.getItem(`name`);
//     storageTel = localStorage.getItem(`tel`);
//     storageText = localStorage.getItem(`text`);
//   } catch (err) {
//     isStorageSupport = false;
//   }
//   if (storageName) {
//     inputName.value = storageName;
//   }
//   if (storageTel) {
//     inputTel.value = storageTel;
//   }
//   if (storageText) {
//     inputText.value = storageText;
//   }
//   form.addEventListener(`submit`, () => {
//     if (isStorageSupport) {
//       localStorage.setItem(`name`, inputName.value);
//       localStorage.setItem(`tel`, inputTel.value);
//       localStorage.setItem(`text`, inputText.value);
//     }
//   });
// }

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
