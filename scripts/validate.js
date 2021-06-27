const showInputError = (input, formElement, { errorClass, inputErrorClass }) => {
    const errorSpan = formElement.querySelector("#" + input.id + "-error")
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(errorClass);
    input.classList.add(inputErrorClass);
}

const hideInputError = (input, formElement, { errorClass, inputErrorClass }) => {
    const errorSpan = formElement.querySelector("#" + input.id + "-error")
    errorSpan.textContent = "";
    errorSpan.classList.remove(errorClass);
    input.classList.remove(inputErrorClass)
}




const checkInputValidity = (formElement, input, settings) => {
    if (input.validity.valid) {
        hideInputError(input, formElement, settings);
    } else {
        showInputError(input, formElement, settings);
    }
};




const hasValidInputs = (inputList) => {
    let isValid = true;
    inputList.forEach(input => {
        if (!input.validity.valid) {
            isValid = false;
        }
    });
    return isValid
};





//const toggleButton = (inputList, saveButton, settings) => {
   //// if (inputList.contains(saveButton)) {
//saveButton.disabled = false;
      //  saveButton.classList.remove(settings.inactiveButtonClass);       <><><> NOT WORKING <><><>
   // } else {
  //      toggleButton(inputList, settings, input)
  //  }
//};






const setEventListeners = (formElement, settings) => {
    const inputList = [...formElement.querySelectorAll(settings.inputSelector)];
    const submitButton = formElement.querySelector(settings.submitButtonSelector);
    inputList.forEach((input) => {
        input.addEventListener("input", (e) => {
            // check valididty
            checkInputValidity(formElement, input, settings);
            // toggle the button
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
