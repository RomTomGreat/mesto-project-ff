import {nameInputProfile, descriptionInputProfile, nameInputPlus, descriptionInputPlus, cardTemplate, cardPlaceList, popupTypeImage, popupCaption, popupImage} from '../index';
import {closeModalProfile, closeModalPlus, openModalImage} from './modals';

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleFormSubmitProfile(evt) {
  const profileDescription = document.querySelector('.profile__description');
  const profileTitle = document.querySelector('.profile__title');
    
  evt.preventDefault();
  
  const newNameInput = nameInputProfile.value;
  const newDescriptionInput = descriptionInputProfile.value;
  
  profileTitle.textContent = newNameInput;
  profileDescription.textContent = newDescriptionInput;
  
  closeModalProfile();
}

function handleFormSubmitPlus(evt) {

  evt.preventDefault();
  
  const newNameInputPlus = nameInputPlus.value;
  const newDescriptionInputPlus = descriptionInputPlus.value;
  
  const newCard = {
    name: newNameInputPlus,
    link: newDescriptionInputPlus
  };
  
  const newAddCard = createCard(newCard, deleteCard, pressLike, showCard);
  cardPlaceList.prepend(newAddCard);

  closeModalPlus();
}

// Функция создания карточки //
function createCard(item, remove, like, show) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  
  const cardImage = card.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.textContent;
  cardImage.addEventListener('click', () => { show (item) });
  
  const cardDelete = card.querySelector('.card__delete-button');
  cardDelete.addEventListener('click', remove);
  
  const cardFooterContainer = card.querySelector('.card__description');
  
  const cardLike = cardFooterContainer.querySelector('.card__like-button');
  cardLike.addEventListener('click', like);
  
  const cardTitle = cardFooterContainer.querySelector('.card__title');
  cardTitle.textContent = item.name;
  
  return card;
}
// Функция удаления карточки //
function deleteCard (evt) {
  const trash = evt.target.closest('.card');
  trash.remove();
}
// Функция нажатия на лайк //
function pressLike (evt) {
  const health = evt.target.closest('.card__like-button');
  health.classList.toggle('card__like-button_is-active');
}

function showCard (item) {
  popupImage.src = item.link;
  popupImage.alt = item.name;
  popupCaption.textContent = item.name;
  openModalImage(popupTypeImage);
}

export {handleFormSubmitProfile, handleFormSubmitPlus, createCard, deleteCard, pressLike, showCard};