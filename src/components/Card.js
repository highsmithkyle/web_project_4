class Card {

    constructor({ data, handlePreviewImage, handleLikeIcon, handleDeleteIcon, userId }, cardSelector) {

        this._userId = userId;
        this._name = data.name;
        this._link = data.link;
        this._likedCard = data.likes;
        this._numberLikes = data.likes.length;
        this._handlePreviewImage = handlePreviewImage;
        this._handleLikeIcon = handleLikeIcon;
        this._handleDeleteIcon = handleDeleteIcon;
        this._cardId = data._id;
        this._ownerId = data.owner._id;

        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content.querySelector(".elements__container")
            .cloneNode(true);

        this._element = cardElement
    }


    getView() {

        this._getTemplate();
        this._setEventListeners();

        const cardImage = this._element.querySelector(".elements__image");

        this._element.querySelector(".elements__text").textContent = this._name
        cardImage.src = this._link;
        cardImage.alt = this._name;
        this._getInitialLikes(cardImage);

        return this._element;

    }

    _setEventListeners() {

        this._element
            .querySelector(".elements__image")
            .addEventListener("click", () => this._handlePreviewImage());

        this._numberOfLikes = this._element.querySelector(".elements__heart-number");

        this._deleteButton = this._element.querySelector(".elements__delete");
        if (this._ownerId === this._userId) {
            this._deleteButton.addEventListener("click", (evt) => {
                this._handleDeleteIcon(evt);
            });
        } else {
            this._deleteButton.remove();
        }
        this._heartLike = this._element.querySelector(".elements__heart")
        this._heartLike.addEventListener("click", (e) => {
            this._liked(e)
        })
    }

    _checkLikes(data) {
        this._numberOfLikes.textContent = data.likes.length;
    }

    _liked(e) {
        this._handleLikeIcon(
            !e.target.classList.contains("elements__heart_active")
        ).then((data) => {
            e.target.classList.toggle("elements__heart_active");
            this._checkLikes(data);
        }).catch((error) => {
            console.error(error)
        });
    }

    _getInitialLikes() {
        const userLikeCard = this._likedCard.some((item) => item._id === this._userId);
        if (userLikeCard) {
            this._heartLike.classList.add("elements__heart_active")
        }
        this._element.querySelector(".elements__heart-number").textContent = this._numberLikes;
    }
}

export default Card;


