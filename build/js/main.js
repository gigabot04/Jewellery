'use strict';
{
  if (document.querySelector(`.filter`)) {
    const filterItems = document.querySelectorAll(`.filter__item`);
    for (const filterItem of filterItems) {
      filterItem.addEventListener(`click`, (evt) => {
        if (evt.target.classList.contains(`filter__btn`)) {
          filterItem.classList.toggle(`filter__item--active`);
        }
      })
    }
    const filter = document.querySelector(`.filter`);
    const openFilterBtn = document.querySelector(`.main__btn-filter`);
    const body = document.querySelector(`body`);
    const closeFilterBtn = document.querySelector(`.main__close-filter`);
    const openCloseFilter = (evt) => {
      evt.preventDefault();
      filter.classList.toggle(`filter--active`);
      body.classList.toggle(`body__js`);
      closeFilterBtn.classList.toggle(`main__close-filter--active`)
    }
    closeFilterBtn.addEventListener(`click`, openCloseFilter);
    openFilterBtn.addEventListener('click', openCloseFilter);
  }
}

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
  const body = document.querySelector(`body`);
  document.querySelector(`.header__no-js`).classList.remove(`header__no-js`);

  openMenuHeader.addEventListener(`click`, () => {
    headerWrap.classList.toggle(`header__wrapper--active`);
    logoWhiteHeader.classList.toggle(`header__logo-svg-white--active`);
    logoHeader.classList.toggle(`header__logo-svg--disable`);
    cartWhiteHeader.classList.toggle(`header__cart-svg-white--active`);
    cartHeader.classList.toggle(`header__cart-svg--disable`);
    navheader.classList.toggle(`header__nav--active`);
    body.classList.toggle(`body__js`);
  });
}

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

'use strict';
{
  if (document.querySelector(`.shop`)) {
    document.querySelector(`.shop__no-js`).classList.remove(`shop__no-js`);
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
}

