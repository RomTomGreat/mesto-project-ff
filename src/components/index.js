import '../pages/index.css';
import {openPopup, closePopup} from './modals';
import {createCard} from './card';
import {enableValidation, clearValidation} from './validation';
import {getUserData, getInitialCards, editMyProfile, createCardNew, clickOnLike, deleteMyCard, updateMyAvatar} from './api';

const popupTypeEdit = document.querySelector('.popup_type_edit');
popupTypeEdit.classList.add("popup_is-animated");
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
popupTypeNewCard.classList.add("popup_is-animated");
const popupTypeAvatar = document.querySelector('.popup_type_avatar');
popupTypeAvatar.classList.add("popup_is-animated");
const popupTypeImage = document.querySelector('.popup_type_image');
popupTypeImage.classList.add("popup_is-animated");

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileAvatar = document.querySelector('.profile__avatar');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileAvatarButton = document.querySelector('.profile__avatar-button');

const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__caption');

let userAvatar = "";
let userId = "";

const formAddNewProfile = document.forms["edit-profile"];
const nameInputProfile = document.querySelector('.popup__input_type_name');
const descriptionInputProfile = document.querySelector('.popup__input_type_description');
const formAddNewCard = document.forms["new-place"];
const nameInputPlus = document.querySelector('.popup__input_type_card-name');
const descriptionInputPlus = document.querySelector('.popup__input_type_url');
const formAddNewAvatar = document.forms["edit-avatar"];
const nameInputAvatar = document.querySelector('.popup__input_type_avatar');
  
const cardPlaceList = document.querySelector('.places__list');

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

function rendering(buttonSave, condition) {
  buttonSave.textContent = condition;
}

function handleFormSubmitProfile(evt) {
  
  rendering(evt.submitter, 'Сохранение...');
  evt.preventDefault();

  editMyProfile(
    nameInputProfile.value,
    descriptionInputProfile.value
  )
  .then((result) => {
    profileTitle.textContent = result.name;
    profileDescription.textContent = result.about;
    evt.target.reset();
    closePopup(popupTypeEdit);
  })
  .catch((error) => {
    console.log(error);
  })
}

function handleFormSubmitAddNewCard(evt) {

  rendering(evt.submitter, 'Сохранение...');
  evt.preventDefault();

  createCardNew({
    name: nameInputPlus.value,
    link: descriptionInputPlus.value,
  })
  .then((newCard) => {
    const newAddCard = createCard(newCard, pressLike, deleteCards, showCard, userId);
    nameInputPlus.value = "";
    descriptionInputPlus.value = "";
    cardPlaceList.prepend(newAddCard);
    evt.target.reset();
    closePopup(popupTypeNewCard);
  })
  .catch((error) => {
    console.log(error);
  })
}

function handleFormSubmitAvatar(evt) {

  rendering(evt.submitter, 'Сохранение...');
  evt.preventDefault();

  updateMyAvatar({ avatar: nameInputAvatar.value })
  .then((data) => {
    profileAvatar.style = `background-image: url(${data.avatar})`;
    userAvatar = data.avatar;
    closePopup(popupTypeAvatar);
  })
  .catch((error) => {
    console.log(error);
  })
}

function pressLike(id, isLiked, changeLike) {
  clickOnLike(id, isLiked)
  .then((data) => {
    changeLike(data.likes)
  })
  .catch((error) => {
    console.log(error);
  })
}

function deleteCards(id, deleteCard) {
  deleteMyCard(id)
    .then((data) => {
      deleteCard(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function showCard(item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupImageCaption.textContent = item.name;
  openPopup(popupTypeImage);
}

function openPopupProfile() {
  openPopup(popupTypeEdit);
  nameInputProfile.value = profileTitle.textContent
  descriptionInputProfile.value =  profileDescription.textContent;
  clearValidation(popupTypeEdit, validationConfig);
}

function openPopupAddNewCard() {
  openPopup(popupTypeNewCard);
  clearValidation(popupTypeNewCard, validationConfig);
}

function openPopupAvatar() {
  clearValidation(popupTypeAvatar, validationConfig);
  openPopup(popupTypeAvatar);
  nameInputAvatar.value = userAvatar;
}

Promise.all([getInitialCards(), getUserData()])
  .then(([cards, userData]) => {
    userAvatar = userData.avatar;
    userId = userData._id;
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileAvatar.style.backgroundImage = `url(${userData.avatar})`;

    cards.forEach((item) => {
      cardPlaceList.append(createCard(item, pressLike, deleteCards, showCard, userId));
    });
  })
  .catch((error) => {
    console.log(error);
  })

enableValidation(validationConfig);

formAddNewProfile.addEventListener('submit', handleFormSubmitProfile);
formAddNewCard.addEventListener('submit', handleFormSubmitAddNewCard);
formAddNewAvatar.addEventListener('submit', handleFormSubmitAvatar);

profileEditButton.addEventListener('click', openPopupProfile);
profileAddButton.addEventListener('click', openPopupAddNewCard);
profileAvatarButton.addEventListener('click', openPopupAvatar);