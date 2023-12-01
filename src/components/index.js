import './pages/index.css'; // добавьте импорт главного файла стилей
import {initialCards} from '../scripts/cards';
import {openModalProfile, handleEscCloseProfile, closeModalProfile, openModalPlus, handleEscClosePlus, closeModalPlus, openModalImage, handleEscCloseImage, closeModalImage} from '../scripts/modals';
import {handleFormSubmitProfile, handleFormSubmitPlus, createCard, deleteCard, pressLike, showCard} from '../scripts/card';

// Константы и обработчики события для модального окна редактирования профиля //
const popupTypeEdit = document.querySelector('.popup_type_edit');
popupTypeEdit.classList.add("popup_is-animated");

const profileEditButton = document.querySelector('.profile__edit-button');
profileEditButton.addEventListener('click', openModalProfile);

const buttonClosePopupProfile = popupTypeEdit.querySelector('.popup__close');
buttonClosePopupProfile.addEventListener('click', closeModalProfile);

popupTypeEdit.addEventListener("click", (event) => {
  if (event.currentTarget === event.target) {
    closeModalProfile();
  }
})

// Константы и обработчики события для модального окна добавления карточки //
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
popupTypeNewCard.classList.add("popup_is-animated");

const profileAddButton = document.querySelector('.profile__add-button');
profileAddButton.addEventListener('click', openModalPlus);

const closeImage = popupTypeNewCard.querySelector('.popup__close');
closeImage.addEventListener('click', closeModalPlus);

popupTypeNewCard.addEventListener("click", (event) => {
  if (event.currentTarget === event.target) {
    closeModalPlus();
  }
})

const popupTypeImage = document.querySelector('.popup_type_image');
popupTypeImage.classList.add("popup_is-animated");
const popupCaption = document.querySelector('.popup__caption');
const popupImage = document.querySelector('.popup__image');

const closeImages = popupTypeImage.querySelector('.popup__close');
closeImages.addEventListener('click', closeModalImage);

popupTypeImage.addEventListener("click", (event) => {
  if (event.currentTarget === event.target) {
    closeModalImage();
  }
})
// Находим форму в DOM //
const formElementProfile = document.forms["edit-profile"];
// Находим поля формы в DOM //
const nameInputProfile = document.querySelector('.popup__input_type_name');
const descriptionInputProfile = document.querySelector('.popup__input_type_description');
// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElementProfile.addEventListener('submit', handleFormSubmitProfile);

// Находим форму в DOM //
const formElementPlus = document.forms["new-place"];
// Находим поля формы в DOM //
const nameInputPlus = document.querySelector('.popup__input_type_card-name');
const descriptionInputPlus = document.querySelector('.popup__input_type_url');
// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElementPlus.addEventListener('submit', handleFormSubmitPlus);

// Темплейт карточки //
const cardTemplate = document.querySelector('#card-template').content;
// DOM узлы //
const cardPlaceList = document.querySelector('.places__list');
// Выводим карточки на страницу //
initialCards.forEach((item) => {
  cardPlaceList.append(createCard(item, deleteCard, pressLike, showCard));
});

export {popupTypeEdit, popupTypeNewCard, nameInputProfile, descriptionInputProfile, nameInputPlus, descriptionInputPlus, cardTemplate, cardPlaceList, popupTypeImage, popupCaption, popupImage};