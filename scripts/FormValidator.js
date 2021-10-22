class FormValidator {

  constructor(settings, formElement) {

    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formEl = formElement;
  }

  _showInputError = (input) => {
    const errorSpan = formEl.querySelector("#" + input.id + "-error")
    input.classList.add(this._inputErrorClass);
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(this._errorClass);

  }

  _hideInputError = (input) => {
    const errorSpan = formEl.querySelector("#" + input.id + "-error")
    input.classList.remove(this._inputErrorClass);
    errorSpan.classList.remove(this._errorClass);
    errorSpan.textContent = "";

  }

  _checkInputValidity = (input) => {

    if (input.validity.valid) {
       this._hideInputError(input);
    } else {
      this._showInputError(input);
    }
  };

  _hasValidInputs = (inputList) => {
    return inputList.every((input) => input.validity.valid);

  }

  _toggleButton(inputList) {

    if (this._hasValidInputs(inputList)) {
      this._button.disabled = false;
      this._button.classList.remove(this.inactiveButtonClass)
    } else {
      this.button.disabled = true;
      this.button.classList.add(this.inactiveButtonClass)
    }
  };

  _setEventListeners() {

    const inputList = [...this._formEl.querySelectorAll(this._inputSelector)];
    const submitButton = this._formEl.querySelector(this._submitButtonSelector);
    inputList.forEach((input) => {
      input.addEventListener("input", (e) => {
        this._checkInputValidity(inputList);
        this._toggleButton(inputList, submitButton)
      })
    });
  }

  enableValidation() {
    this._formEl.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    this._setEventListeners();

  }
}


export default FormValidator;

