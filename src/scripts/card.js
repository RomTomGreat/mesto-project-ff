// Функция создания карточки //
function createCard(item, remove, like, show) {
  // Темплейт карточки //
  const cardTemplate = document.querySelector('#card-template').content;

  const card = cardTemplate.querySelector('.card').cloneNode(true);
  
  const cardImage = card.querySelector('.card__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
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

export {createCard, deleteCard, pressLike};