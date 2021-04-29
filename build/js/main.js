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

'use strict';

if (document.querySelector(`.filter`)) {
  const filterItems = document.querySelectorAll(`.filter__item`);
  for (const filterItem of filterItems) {
    filterItem.classList.remove(`filter__item--active`);
    filterItem.addEventListener(`click`, (evt) => {
      if (evt.target.classList.contains(`filter__btn`)) {
        filterItem.classList.toggle(`filter__item--active`);
      }
    });
  }
  const filter = document.querySelector(`.filter`);
  filter.classList.remove(`filter--no-js`);
  const openFilterBtn = document.querySelector(`.main__btn-filter`);
  const body = document.querySelector(`body`);
  const closeFilterBtn = document.querySelector(`.main__close-filter`);
  const openCloseFilter = (evt) => {
    evt.preventDefault();
    filter.classList.toggle(`filter--active`);
    body.classList.toggle(`body__js`);
    closeFilterBtn.classList.toggle(`main__close-filter--active`);
  };
  closeFilterBtn.addEventListener(`click`, openCloseFilter);
  openFilterBtn.addEventListener(`click`, openCloseFilter);
}

"use strict";

if (document.querySelector(`.login`)) {
  const form = document.querySelector(`.login`);
  const inputEmail = form.querySelector(`input#email`);
  let storageEmail = ``;
  let isStorageSupport = true;
  try {
    storageEmail = localStorage.getItem(`email`);
  } catch (err) {
    isStorageSupport = false;
  }
  if (storageEmail) {
    inputEmail.value = storageEmail;
  }
  form.addEventListener(`submit`, () => {
    if (isStorageSupport) {
      localStorage.setItem(`email`, inputEmail.value);
    }
  });
}

'use strict';
if (document.querySelector(`.login`)) {
  const modalLogin = document.querySelector(`.login`);
  const closeBtn = modalLogin.querySelector(`.login__close`);
  const overlay = document.querySelector(`.overlay`);
  const body = document.querySelector(`body`);
  const openBtn = document.querySelector(`.header__login`);
  const openBtn2 = document.querySelector(`.header__nav-login`);
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
    overlay.classList.add(`overlay--active`);
    modalLogin.classList.add(`login--active`);
    closeBtn.addEventListener(`click`, closeModalAdd);
    overlay.addEventListener(`click`, closeModalAdd);
    document.addEventListener(`keydown`, onModalEscPress);
    body.classList.add(`body__js`);
    if (inputEmail.value) {
      inputPass.focus();
    } else {
      inputEmail.focus();
    }
  };
  const closeModalAdd = (evt) => {
    evt.preventDefault();
    overlay.classList.remove(`overlay--active`);
    modalLogin.classList.remove(`login--active`);
    closeBtn.removeEventListener(`click`, closeModalAdd);
    overlay.removeEventListener(`click`, closeModalAdd);
    document.removeEventListener(`keydown`, onModalEscPress);
    if (!document.querySelector(`.header__nav--active`)) {
      body.classList.remove(`body__js`);
    }
    openBtn.focus();
  };
  openBtn.addEventListener(`click`, openModalAdd);
  openBtn2.addEventListener(`click`, openModalAdd);
}

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

'use strict';
if (document.querySelector(`.shop`)) {
  document.querySelector(`.shop--no-js`).classList.remove(`shop--no-js`);
  const swiper = new Swiper(`.shop__container`, {
    navigation: {
      nextEl: `.swiper-button-next`,
      prevEl: `.swiper-button-prev`
    },
    pagination: {
      el: `.swiper-pagination`,
      clickable: true,
      renderBullet(index, className) {
        return `<span class="` + className + `">` + (index + 1) + `</span>`;
      },
      renderFraction(currentClass, totalClass) {
        return `<span class="` + currentClass + `"></span>` +
                ` of ` +
                `<span class="` + totalClass + `"></span>`;
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
          type: `fraction`
        }
      },
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          type: `bullets`
        }
      },
      1023: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          type: `bullets`
        }
      }
    }
  });
}
if (document.querySelector(`.cart`)) {
  const cartThumbs = new Swiper(`.cart__thumbs`, {
    autoHeight: false,
    slidesPerView: 3,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

    breakpoints: {
      768: {
        direction: `horizontal`,
        spaceBetween: 14,
      },
      1024: {
        direction: `vertical`,
        spaceBetween: 30,
      }
    }
  });
  const cartTop = new Swiper(`.cart__top`, {
    spaceBetween: 10,
    thumbs: {
      swiper: cartThumbs
    },

    breakpoints: {
      320: {
        pagination: {
          el: `.swiper-pagination`,
          type: `fraction`,
          renderFraction(currentClass, totalClass) {
            return `<span class="` + currentClass + `"></span>` +
                    ` of ` +
                    `<span class="` + totalClass + `"></span>`;
          }
        },
      },
      786: {
        pagination: false,
      },
    },
  });
}

'use strict';

if (document.querySelector(`.cart__toggle`)) {
  const tabBtn = document.querySelectorAll(`.cart__btn-info`);
  const listWrap = document.querySelectorAll(`.cart__item`);

  for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener(`click`, (evt) => {
      evt.preventDefault();
      for (let j = 0; j < tabBtn.length; j++) {
        tabBtn[j].classList.remove(`cart__btn-info--active`);
        listWrap[j].classList.remove(`cart__item--active`);
      }
      listWrap[i].classList.add(`cart__item--active`);
      tabBtn[i].classList.add(`cart__btn-info--active`);
    });
  }
}
