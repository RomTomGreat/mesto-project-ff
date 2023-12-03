import './pages/index.css';
import {initialCards} from './cards';
import {openPopup, closePopup} from './modals';
import {createCard, deleteCard, pressLike} from './card';

const popupTypeEdit = document.querySelector('.popup_type_edit');
popupTypeEdit.classList.add("popup_is-animated");
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
popupTypeNewCard.classList.add("popup_is-animated");
const popupTypeImage = document.querySelector('.popup_type_image');
popupTypeImage.classList.add("popup_is-animated");

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__caption');
// Находим 1 форму в DOM //
const formAddNewProfile = document.forms["edit-profile"];
// Находим 1 поля формы в DOM //
const nameInputProfile = document.querySelector('.popup__input_type_name');
const descriptionInputProfile = document.querySelector('.popup__input_type_description');
// Находим 2 форму в DOM //
const formAddNewCard = document.forms["new-place"];
// Находим 2 поля формы в DOM //
const nameInputPlus = document.querySelector('.popup__input_type_card-name');
const descriptionInputPlus = document.querySelector('.popup__input_type_url');

// DOM узлы //
const cardPlaceList = document.querySelector('.places__list');
// Выводим карточки на страницу //
initialCards.forEach((item) => {
  cardPlaceList.append(createCard(item, deleteCard, pressLike, showCard));
});

function showCard (item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupImageCaption.textContent = item.name;
  openPopup(popupTypeImage);
}

function handleFormSubmitProfile(evt) {
    
  evt.preventDefault();
  
  const newNameInput = nameInputProfile.value;
  const newDescriptionInput = descriptionInputProfile.value;
  
  profileTitle.textContent = newNameInput;
  profileDescription.textContent = newDescriptionInput;
  
  formAddNewProfile.reset();
  closePopup(popupTypeEdit);
}

function handleSubmitAddNewCard(evt) {

  evt.preventDefault();
  
  const newNameInputPlus = nameInputPlus.value;
  const newDescriptionInputPlus = descriptionInputPlus.value;
  
  const newCard = {
    name: newNameInputPlus,
    link: newDescriptionInputPlus
  };
  
  const newAddCard = createCard(newCard, deleteCard, pressLike, showCard);
  cardPlaceList.prepend(newAddCard);

  formAddNewCard.reset();
  closePopup(popupTypeNewCard);
}

function openPopupProfile() {
  nameInputProfile.value = profileTitle.textContent
  descriptionInputProfile.value =  profileDescription.textContent;
  openPopup(popupTypeEdit);
}

function openPopupAddNewCard() {
  openPopup(popupTypeNewCard);
}

formAddNewProfile.addEventListener('submit', handleFormSubmitProfile);
formAddNewCard.addEventListener('submit', handleSubmitAddNewCard);

profileEditButton.addEventListener('click', openPopupProfile);
profileAddButton.addEventListener('click', openPopupAddNewCard);