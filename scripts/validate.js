const showInputError = (input, formElement, { errorClass }) => {

    const errorSpan = formElement.querySelector("#" + input.id + "-error")
    
    errorSpan.textContent = input.validationMessage;
    errorSpan.classList.add(errorClass);
    // input.classList.add(inputErrorClass);
}

const hideInputError = (input, formElement, { errorClass }) => {

    const errorSpan = formElement.querySelector("#" + input.id + "-error")
    
    
    errorSpan.textContent = "";
    errorSpan.classList.remove(errorClass);
    // input.classList.remove(inputErrorClass)
}


const checkInputValidity = (formElement, input, settings) => {
    console.log(input.validity.valid)

    if (input.validity.valid) {
        console.log("valid")
        hideInputError(input, formElement, settings);
    } else {
        showInputError(input, formElement, settings);
    }
};

const hasValidInputs = (inputList) => {
    let isValid = true;
    inputList.forEach(input => {
     if(!input.validity.valid) {
         isValid = false;
     }   
    }) 
    return isValid;
 };






const toggleButton = (inputList, input, settings) => {
  
  console.log(hasValidInputs(inputList));
  
    // if(hasValidInputs(inputList)) {
        // make button enabled
   // } else {
        // make button disabled
  //  }
};


const setEventListeners = (formElement, settings) => {
    const inputList = [...formElement.querySelectorAll(settings.inputSelector)];
    const submitButton = formElement.querySelector(settings.submitButtonSelector);
    inputList.forEach((input) => {
        input.addEventListener("input", (e) => {
            checkInputValidity(formElement, input, settings);

            // check validdy
            // add error message/class
            toggleButton(formElement, submitButton, settings)
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
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "modal__info_type_error",
    errorClass: "modal__error",
});
