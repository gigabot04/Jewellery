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
