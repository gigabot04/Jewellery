'use strict';
if (document.querySelector(`.shop`)) {
  document.querySelector(`.shop-no-js`).classList.remove(`shop-no-js`);
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
      1201: {
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

