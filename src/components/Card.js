
class Card {

    constructor({ data, handlePreviewImage }, cardSelector) {

        this._name = data.name;
        this._link = data.link;
        this._handlePreviewImage = handlePreviewImage;

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
            .addEventListener("click", () => this._handlePreviewImage());

        this._element
            .querySelector(".elements__delete")
            .addEventListener("click", () => this._handleDeleteIcon());

        this._heartLike = this._element.querySelector(".elements__heart");
        this._heartLike.addEventListener("click", () => this._handleLikeIcon());
    }

    _handleLikeIcon() {
        this._heartLike.classList.toggle("elements__heart_active");
    }

    _handleDeleteIcon() {
        this._element.remove();
    }

}

export default Card;


