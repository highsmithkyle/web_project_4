import Popup from "./Popup.js"

export default class PopupWithFormDelete extends Popup {

    constructor({ popupSelector, handleFormSubmit }) {

        super(popupSelector)

        this._popupForm = this._modalElement.querySelector(".modal__form");
        this._handleFormSubmit = handleFormSubmit;
        this._button = this._modalElement.querySelector(".modal__save-button")
    }

    open(evt, cardId) {
        super.open();
        this._cardId = cardId;
        this._card = evt.target.parentElement;
    }

    setEventListeners() {
        this._popupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this._handleFormSubmit(this._card, this._cardId);
        })
        super.setEventListeners();
    }
}