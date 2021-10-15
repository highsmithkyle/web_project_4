

class Card {

    constructor(card, cardSelector) {

        this._name = card.name;
        this.link = card.link;

        this._cardSelector = cardSelector;

    }

    _getTemplate() {

        const cardElement = document
            .querySelector(this._cardSelector)
            .content.querySelector(".elements__container")
            .cloneNode(true);

        return cardElement
    }


    getView() {


        this._element = this._getTemplate();
        this._setEventListeners();

        const cardImage = this._element.querySelector(".elements__image");

        this._element.querySelector(".elements__text").textContent = this._name
        cardImage.src = this._link;
        cardImage.alt = this._name;

        return this._element;

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


}

console.log("card test")

export default Card;