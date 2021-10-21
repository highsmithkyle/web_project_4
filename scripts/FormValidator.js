const profileFormEL = document.querySelector(".modal__form_type_edit-form");
const addFormEl = document.querySelector(".modal__form_type_new-place");

class FormValidator {

  constructor(settings, formElement) {

    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._formEl = formElement;
  }

  _showInputError = (formEl, input) => {
    const errorSpan = formEl.querySelector("#" + input.id + "-error")
    input.classList.add(this._inputErrorClass);
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(this._errorClass);

  }

  _hideInputError = (formEl, input) => {
    const errorSpan = formEl.querySelector("#" + input.id + "-error")
    input.classList.remove(this._inputErrorClass);
    errorSpan.classList.remove(this._errorClass);
    errorSpan.textContent = "";

  }



  _checkInputValidity = (formEl, input) => {

    if (input.validity.valid) {
      return _hideInputError(formEl, input);
    } else {
      return _showInputError(formEl, input);
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


    this._inputList = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
    inputList.forEach((input) => {
      input.addEventListener("input", (e) => {
        this._checkInputValidity(this._form, input, settings);
        this._toggleButton(inputList, submitButton, settings)
      })
    });

  }
  

  enableValidation() {
    this._formElement.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    _setEventListeners();

  }

}


export default FormValidator;

