import {cardTemplate} from './index';
// Функция создания карточки //
export function createCard(item, pressLike, deleteCards, showCard, userId) {

  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.id = item._id;
  
  const cardImage = card.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  
  const cardDelete = card.querySelector('.card__delete-button');
  const cardFooterContainer = card.querySelector('.card__description');
  
  const cardTitle = cardFooterContainer.querySelector('.card__title');
  cardTitle.textContent = item.name;
  
  let likes = item.likes;

  const cardCounter = card.querySelector('.card__counter');
  const cardLike = card.querySelector('.card__like-button');
  
  function deleteCard() {
    card.remove();
  }

  function checkDeleteIcon() {
    if (item.owner._id !== userId) {
      cardDelete.style.visibility = "hidden";
    }
  }
  checkDeleteIcon();

  // проверяем лайкнули ли мы карточку
  const checkLike = () => {
    return likes.some((like) => like._id === userId);
  };
  // обновляет текущий массив лайков и обновляет статус
  const changeLike = (newLikes) => {
    likes = newLikes;
    setLikeStatus();
  };

  const setLikeStatus = () => {
    const isLiked = checkLike();
    if (isLiked) {
      cardLike.classList.add('card__like-button_is-active');
    } else {
      cardLike.classList.remove('card__like-button_is-active');
    }
    cardCounter.textContent = likes.length;
  };
  setLikeStatus();

  cardLike.addEventListener("click", () => pressLike(item._id, checkLike(), changeLike));
  cardDelete.addEventListener("click", () => deleteCards(item._id, deleteCard));
  cardImage.addEventListener("click", () => showCard(item));

  return card;
}