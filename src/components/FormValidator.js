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

    const errorSpan = this._formEl.querySelector("#" + input.id + "-error")
    input.classList.add(this._inputErrorClass);
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(this._errorClass);

  }

  _hideInputError = (input) => {

    const errorSpan = this._formEl.querySelector("#" + input.id + "-error")
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


  _toggleButton() {

    if (this._hasValidInputs(this._inputList)) {
      this._submitButton.disabled = false;
      this._submitButton.classList.remove(this._inactiveButtonClass)
    } else {
      this._submitButton.disabled = true;
      this._submitButton.classList.add(this._inactiveButtonClass)
    }
  };

  _setEventListeners() {

    this._inputList = [...this._formEl.querySelectorAll(this._inputSelector)];
    this._submitButton = this._formEl.querySelector(this._submitButtonSelector);
    this._inputList.forEach((input) => {
      input.addEventListener("input", (e) => {
        this._checkInputValidity(input);
        this._toggleButton()
      })
    });
  }

  resetValidation() {

    this._toggleButton();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
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