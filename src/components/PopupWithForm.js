import Popup from "./Popup"

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector)

        this._popupForm = this._modalElement.querySelector(".modal__form");
        this._handleFormSubmit = handleFormSubmit

    }

    _getInputValues() {
        this._inputList = this._modalElement.querySelectorAll("modal__info");

        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    setEventListeners() {
        this._modalElement.addEventListener("submit", () => {
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    }

    close() {
        this._popupForm.reset();
        super.close();
    }
}

