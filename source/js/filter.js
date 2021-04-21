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
    filter.classList.remove(`filter__no-js`);
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
