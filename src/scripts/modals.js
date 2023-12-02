function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeEscPopup);
  popup.addEventListener("click", handleCloseModalWindowOverlayClick);
}

function closeEscPopup(event) {
  if (event.key === "Escape") {
    closePopup(document.querySelector('.popup_is-opened'));
  }
}

function handleCloseModalWindowOverlayClick(event) {
  if (event.currentTarget === event.target || event.target.classList.contains('popup__close')) {
    closePopup(event.currentTarget);
  }
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener("keydown", closeEscPopup);
  popup.removeEventListener("click", handleCloseModalWindowOverlayClick);
}

export {openPopup, closeEscPopup, handleCloseModalWindowOverlayClick, closePopup};