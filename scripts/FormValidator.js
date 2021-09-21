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
    const errorSpan = this._form.querySelector("#" + input.id + "-error")
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
   } 

  _hideInputError() {

  }

   _toggleButton (inputList, button, settings) {
   
    if (hasValidInputs(inputList)) {
        this.button.disabled = false;
        this.button.classList.remove(settings.inactiveButtonClass)
    } else {
        this.button.disabled = true;
        this.button.classList.add(settings.inactiveButtonClass)
    }
 };

_hasValidInputs() {

}

  _setEventListeners() {

   this._inputList = [...this._form.querySelectorAll(this._inputSelector)];
  this._submitButton = this._form.querySelector(this._submitButtonSelector);
    inputList.forEach((input) => {
       input.addEventListener("input", (e) => {
            checkInputValidity(this._form, input, settings);
            toggleButton(inputList, submitButton, settings)
        })
    }); 

  }
  
 enableValidation() {

   this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formElement, settings);

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






const profileFormValidator = new FormValidator(settings, profileFormEL);
const addFormValidator = new FormValidator(settings, addFormEl);
profileFormValidator.enableValidation();

export default FormValidator;