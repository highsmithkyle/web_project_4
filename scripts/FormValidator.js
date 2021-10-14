class FormValidator {

  constructor(settings, formElement) {

    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = formElement;
  }

  _showInputError(input) {
   const errorSpan = this._formElement.querySelector("#" + input.id + "-error")
   input.classList.add(this._inputErrorClass); 
   errorSpan.textContent = input.validationMessage;
  errorSpan.classList.add(this._errorClass);
    
  }

  _hideInputError(input) {
    const errorSpan = this._formElement.querySelector("#" + input.id + "-error")
    input.classList.remove(this._inputErrorClass); 
     errorSpan.classList.remove(this._errorClass);
     errorSpan.textContent = "";
    
  }


  
  _checkInputValidity = (input, settings) => {
    
    if (input.validity.valid) {
        return hideInputError(input, this._form, settings);
    } else {
       return showInputError(input, this._form, settings);
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

      setEventListeners();

  }
  
}



const validationSettings = {

  inputSelector: ".modal__info",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__info_type_error",
  errorClass: "modal__error_active",
}




console.log("test")

export default FormValidator;

