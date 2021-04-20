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

'use strict';
{
  // import Swiper from 'swiper/bundle';
  new Swiper(`.shop__container`, {
    navigation: {
      nextEl: `.swiper-button-next`,
      prevEl: `.swiper-button-prev`
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
                ' of ' +
                '<span class="' + totalClass + '"></span>';
      }
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    a11y: {
      enabled: true,
    },
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          type: 'fraction'
        }
      },
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          type: 'bullets'
        }
      },
      1201: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          type: 'bullets'
        }
      }
    }
  });
}

