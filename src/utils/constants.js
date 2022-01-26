export const cardConstants = {
    cardSelector: '#elements-template',
    placeSelector: 'elements',
}

export const profileConstants = {

    profileModalSelector: "modal_profile",
    modalProfile: document.querySelector(".modal_profile"),
    profileFormEL: document.querySelector(".modal__form_type_edit-form"),
    profileEditButton: document.querySelector(".profile__edit-button"),
    profileFormCloseButton: document.querySelector(".modal__close-button_type_profile"),
    profileAddButton: document.querySelector(".profile__add-button"),
    profileFormNameInput: document.querySelector(".modal__info_place_name-input"),
    profileFormAboutMeInput: document.querySelector(".modal__info_place_about-me-input"),
    profileTitle: document.querySelector(".profile__title"),
    profileSubtitle: document.querySelector(".profile__subtitle"),
}

export const addCardConstants = {

    addCardSelector: "modal_add-card",
    addModalEl: document.querySelector(".modal_add-card"),
    addFormEl: document.querySelector(".modal__form_type_new-place"),
    addFormCloseButton: document.querySelector(".modal__close-button_type_new-place"),
    addFormPlaceInput: document.querySelector(".modal__info_place_new-title-input"),
    addFormUrlInput: document.querySelector(".modal__info_place_url-input"),
}

export const imagePreviewConstants = {

    imagePreviewSelector: "modal_type_image-expand",
    // modalImagePreviewEl: modalImageExpand.querySelector(".modal__image-preview"),
    // modalImageExpandCloseButton: modalImageExpand.querySelector(".modal__close-button_place_image-expand"),
    // modalImageSubtitle: modalImageExpand.querySelector(".modal__image-subtitle"),

}

export const validationSettings = {


    formSelector: "modal__form",
    inputSelector: ".modal__info",
    submitButtonSelector: ".modal__save-button",
    inactiveButtonClass: "modal__save-button_disabled",
    inputErrorClass: "modal__info_type_error",
    errorClass: "modal__error_active",
}

