const modalImageExpand = document.querySelector(".modal_type_image-expand");
const modalImagePreviewEl = modalImageExpand.querySelector(".modal__image-preview");
const modalImageSubtitle = modalImageExpand.querySelector(".modal__image-subtitle")


class Card {

    constructor({ card, handleImagePreview }, cardSelector) {

        this._name = card.name;
        this._link = card.link;
        this._handleImagePreview = handleImagePreview;



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
            .addEventListener("click", () => this._handleImagePreview());

        this._element
            .querySelector(".elements__delete")
            .addEventListener("click", () => this._handleDeleteIcon());

        this._element
            .querySelector(".elements__heart")
            .addEventListener("click", () => this._handleLikeIcon());
    }

    _handleLikeIcon() {
        this._element
            .querySelector(".elements__heart")
            .classList.toggle("elements__heart_active");

    }

    _handleDeleteIcon() {
        this._element.remove();

    }



}

export default Card;


