const modalImageExpand = document.querySelector(".modal_type_image-expand");
const modalImagePreviewEl = modalImageExpand.querySelector(".modal__image-preview");
const modalImageExpandCloseButton = modalImageExpand.querySelector(".modal__close-button_place_image-expand");
const modalImageSubtitle = modalImageExpand.querySelector(".modal__image-subtitle")



class Card {

constructor(card, cardSelector) {

this._name = card.name;
this.link = card.link;

this._cardSelector = cardSelector;
    
}

_setEventListeners() {
    this._element
    .querySelector(".elements__image")
    .addEventListener("click", () => this._handlePreviewImg());

    this._element
      .querySelector(".elements__delete")
      .addEventListener("click", () => this._handleDeleteIcon());

    this._element
      .querySelector(".elements__heart")
      .addEventListener("click", () => this._handleLikeIcon());
  }

_handleLikeIcon() {
    this._element
    .querySelector(".elemenets__heart")
    .classList.toggle(".elements__heart_active");

}

_handleDeleteCard() {
    this._element.remove();
    this._card = null;
}

_handleImagePreview() {
    openModal(modalImageExpand)
    modalImageExpand.src = this._link;
    modalImageExpand.alt = this._name;
    modalImageExpand.textContent = this._name
}

_getTemplate() {

   const template = document
    .querySelector(this._cardSelector)
    .content.querySelector(".card")
    .cloneNode(true);

    this._element = template
}


getView() {
    
    
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardImage = this._element.querySelector(".elements__image");
    this._element.querySelector(".modalImageSubtitle").textContent = this._name
    
    cardImage.src = this._link;
    cardImage.alt = this._name;

    return this._element;

}

}

console.log("card test")

export default Card;