 //   const showInputError = (input, formElement, { errorClass, inputErrorClass }) => {
 //   const errorSpan = formElement.querySelector("#" + input.id + "-error")
 //   errorSpan.textContent = input.validationMessage;
 //   errorSpan.classList.add(errorClass);
  //  input.classList.add(inputErrorClass);

 // }

  //  const hideInputError = (input, formElement, { errorClass, inputErrorClass }) => {
  //  const errorSpan = formElement.querySelector("#" + input.id + "-error")
  //  errorSpan.textContent = "";
  //  errorSpan.classList.remove(errorClass);
  //  input.classList.remove(inputErrorClass);

// }


// const checkInputValidity = (formElement, input, settings) => {
    
//    if (input.validity.valid) {
//        hideInputError(input, formElement, settings);
//    } else {
//        showInputError(input, formElement, settings);
//    }
// };


// const hasValidInputs = (inputList) =>
//    inputList.every((input) => input.validity.valid === true);


// const toggleButton = (inputList, button, settings) => {
   
//    if (hasValidInputs(inputList)) {
//        button.disabled = false;
//        button.classList.remove(settings.inactiveButtonClass)
//    } else {
//        button.disabled = true;
//       button.classList.add(settings.inactiveButtonClass)
//    }
//    };


 //   const setEventListeners = (formElement, settings) => {
 //   const inputList = [...formElement.querySelectorAll(settings.inputSelector)];
 //   const submitButton = formElement.querySelector(settings.submitButtonSelector);
 //   inputList.forEach((input) => {
 //       input.addEventListener("input", (e) => {
 //           checkInputValidity(formElement, input, settings);
 //           toggleButton(inputList, submitButton, settings)
 //       })
 //   })
 //  };


// const enableValidation = (settings) => {
//    const formElements = [...document.querySelectorAll(settings.formSelector)];
//    formElements.forEach(formElement => {
//        formElement.addEventListener("submit", (e) => e.preventDefault());
//        setEventListeners(formElement, settings);
//
//    });
//  };


enableValidation({
    formSelector: ".modal__form",
    inputSelector: ".modal__info",
    submitButtonSelector: ".modal__save-button",
    inactiveButtonClass: "modal__save-button_disabled",
    inputErrorClass: "modal__info_type_error",
    errorClass: "modal__error_active",
});
