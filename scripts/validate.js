const showInputError = (input, formElement, { errorClass }) => {
    const errorSpan = formElement.querySelector("#" + input.id + "-error")
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(errorClass);
    
}

const hideInputError = (input, formElement, { errorClass }) => {
    const errorSpan = formElement.querySelector("#" + input.id + "-error")
    errorSpan.textContent = "";
    errorSpan.classList.remove(errorClass);
    
}


const checkInputValidity = (formElement, input, settings) => {
    console.log(input.validity.valid)
    
    if (input.validity.valid) {
        hideInputError(input, formElement, settings);
    } else {
        showInputError(input, formElement, settings);
    }
};


const hasValidInputs = (inputList) => 
   inputList.every((input) => input.validity.valid === true);


const toggleButton = (inputList, button, settings) => {
  console.log('hasValid', hasValidInputs(inputList))
    
    if( hasValidInputs(inputList)) {
        button.disabled = false;
        button.classList.remove(settings.inactiveButtonClass)
 } else {
       button.disabled = true;
       button.classList.add(settings.inactiveButtonClass)
   }
};


const setEventListeners = (formElement, settings) => {
    const inputList = [...formElement.querySelectorAll(settings.inputSelector)];
    const submitButton = formElement.querySelector(settings.submitButtonSelector);
    inputList.forEach((input) => {
        input.addEventListener("input", (e) => {
            checkInputValidity(formElement, input, settings);
            toggleButton(inputList, submitButton, settings)
        })
    })
};


const enableValidation = (settings) => {
    const formElements = [...document.querySelectorAll(settings.formSelector)];
    formElements.forEach(formElement => {
        formElement.addEventListener("submit", (e) => e.preventDefault());
        setEventListeners(formElement, settings);

    });
};


enableValidation({
    formSelector: ".modal__form",
    inputSelector: ".modal__info",
    submitButtonSelector: ".modal__save-button",
    inactiveButtonClass: "modal__save-button_disabled",
    inputErrorClass: "modal__info_type_error",
    errorClass: "modal__error_active",
});
