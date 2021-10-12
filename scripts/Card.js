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
    
}

_handleImagePreview() {
    
}

_getTemplate() {

   return document
    .querySelector(this._cardSelector)
    .content.querySelector(".card")
    .cloneNode(true);

}


getView() {
    
    
    this._element = this._getTemplate();
    this._setEventListeners();
}

}

console.log("card test")

export default Card;