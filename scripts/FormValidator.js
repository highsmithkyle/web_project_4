class FormValidator {

  constructor(settings, formElement) {

    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = formElement;
  }

  _showInputError(input, errorSpan) {
   errorSpan = this._form.querySelector("#" + input.id + "-error")
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _hideInputError(input, errorSpan) {
    errorSpan = this._form.querySelector("#" + input.id + "-error")
    errorSpan.textContent = "";
    errorSpan.classList.remove(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _checkInputValidity = (input, settings) => {
    
    if (input.validity.valid) {
        return hideInputError(input, this._form, settings);
    } else {
        return showInputError(input, this._form, settings);
    }
};

_hasValidInputs = (inputList) =>
   inputList.every((input) => input.validity.valid === true);

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


    this._inputList = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    inputList.forEach((input) => {
      input.addEventListener("input", (e) => {
        this._checkInputValidity(this._form, input, settings);
        this._toggleButton(inputList, submitButton, settings)
      })
    });

  }

  enableValidation = (settings) => {

    const formElements = [...document.querySelectorAll(settings.formSelector)];
    formElements.forEach((formElement) => {
      this._form.addEventListener('submit', (e) =>
      e.preventDefault());

      setEventListeners(this._form, settings);

    })
  }
  

}



const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__info",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__info_type_error",
  errorClass: "modal__error_active",
}

const profileFormValidator = new FormValidator(validationSettings, profileFormEL);
const addFormValidator = new FormValidator(validationSettings, addFormEl);

console.log("test")

export default FormValidator;

