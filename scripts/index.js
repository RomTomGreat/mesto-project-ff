// @todo: Темплейт карточки
const card = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardPlaceList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCards(item, remove) {
  const cardList = card.querySelector('.card').cloneNode(true);

  const cardImage = cardList.querySelector('.card__image');
  cardImage.src = item.link;

  const cardDelete = cardList.querySelector('.card__delete-button');
  cardDelete.addEventListener('click', remove);

  const cardFooterContainer = cardList.querySelector('.card__description');

  const cardTitle = cardFooterContainer.querySelector('.card__title');
  cardTitle.textContent = item.name;

  const cardLike = cardFooterContainer.querySelector('.card__like-button');

  return cardList;
}
// @todo: Функция удаления карточки
function deleteCards (evt) {
  const trash = evt.target.closest('.card');
  trash.remove();
}
// @todo: Вывести карточки на страницу
function showCards() {
  initialCards.forEach((item) => {

    const createCardsShow = createCards(item);
    cardPlaceList.append(createCards(item, deleteCards));

  });
}

showCards();