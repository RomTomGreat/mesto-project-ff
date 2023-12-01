import {popupTypeEdit, popupTypeNewCard, popupTypeImage} from '../components/index';

// Открытие модального окна на кнопку Редактировать профиль //
function openModalProfile() {
  popupTypeEdit.classList.add("popup_is-opened");
  document.addEventListener('keydown', handleEscCloseProfile);
};
// Закрытие модального окна у кнопки Редактировать профиль на Esc //
function handleEscCloseProfile() {
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeModalProfile();
    }
  });
}
// Закрытие модального окна у кнопки Редактировать профиль на Х //
function closeModalProfile() {
  if (popupTypeEdit.classList.contains('popup_is-opened')) {
    popupTypeEdit.classList.remove("popup_is-opened");
  }
}
// Открытие модального окна на кнопку [+] //
function openModalPlus() {
  popupTypeNewCard.classList.add("popup_is-opened");
  document.addEventListener('keydown', handleEscClosePlus);
};
// Закрытие модального окна у кнопки [+] на Esc //
function handleEscClosePlus() {
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModalPlus();
    }
  });
}
// Закрытие модального окна у кнопки [+] на Х //
function closeModalPlus() {
  if (popupTypeNewCard.classList.contains('popup_is-opened')) {
    popupTypeNewCard.classList.remove("popup_is-opened");
  }
}
// Открытие модального окна на нажатие на картинку //
function openModalImage() {
  popupTypeImage.classList.add("popup_is-opened");
  document.addEventListener('keydown', handleEscCloseImage);
};
// Закрытие модального окна картинки на Esc //
function handleEscCloseImage() {
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeModalImage();
    }
  });
}
// Закрытие модального окна картинки на Х //
function closeModalImage() {
  if (popupTypeImage.classList.contains('popup_is-opened')) {
    popupTypeImage.classList.remove("popup_is-opened");
  }
}

export {openModalProfile, handleEscCloseProfile, closeModalProfile, openModalPlus, handleEscClosePlus, closeModalPlus, openModalImage, handleEscCloseImage, closeModalImage};