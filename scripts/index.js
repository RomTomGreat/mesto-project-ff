// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardPlaceList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCard(item, remove) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);

  const cardImage = card.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.textContent;

  const cardDelete = card.querySelector('.card__delete-button');
  cardDelete.addEventListener('click', remove);

  const cardFooterContainer = card.querySelector('.card__description');

  const cardTitle = cardFooterContainer.querySelector('.card__title');
  cardTitle.textContent = item.name;

  const cardLike = cardFooterContainer.querySelector('.card__like-button');

  return card;
}
// @todo: Функция удаления карточки
function deleteCard (evt) {
  const trash = evt.target.closest('.card');
  trash.remove();
}
// @todo: Вывести карточки на страницу
function showCards() {

  initialCards.forEach((item) => {
    cardPlaceList.append(createCard(item, deleteCard));
  });

}

showCards();