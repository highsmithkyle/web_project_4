import "./index.css"

import {
  cardConstants,
  profileConstants,
  addCardConstants,
  imagePreviewConstants,
  validationSettings,
} from "../utils/constants";


import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js"
import initialCards from "../utils/InitialCards.js"
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo";


const cardList = new Section({
  renderer: (card) => {
    const newCard = new Card({
      card,
      handlePreviewImage: () => {
        previewImageModal.open(card)
      },
    },
      cardConstants.cardSelector
    );
    const cardElement = newCard.getView();
    cardList.addItem(cardElement);
  },
},
  cardConstants.placeSelector
);



const userInfo = new UserInfo({
  profileNameSelector: profileConstants.profileTitle,
  profileSubtitleSelector: profileConstants.profileSubtitle,
});



const profileModal = new PopupWithForm({
  popupSelector: profileConstants.profileModalSelector,
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data)
  },
});



const addCardModal = new PopupWithForm({
  popupSelector: addCardConstants.addCardSelector,
  handleFormSubmit: (card) => {
    const newCard = new Card(
      {
        card,
        handlePreviewImage: () => {
          imagePreviewModal.open(card)
        },
      },
      cardConstants.cardSelector
    );
    cardList.addItem(newCard.getView)
  },
});

const imageExpandModal = new PopupWithImage(imagePreviewConstants.imagePreviewSelector);

const profileFormValidator = new FormValidator(validationSettings, profileConstants.profileFormEL);
const addFormValidator = new FormValidator(validationSettings, addCardConstants.addFormEL);


profileFormValidator.enableValidation();
addFormValidator.enableValidation();

cardList.renderItems(initialCards);

addCardModal.setEventListeners();
profileModal.setEventListeners();
imageExpandModal.setEventListeners();


//<><><><><> FUNCTIONS <><><><><>//

addCardConstants.addFormCloseButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addCardModal.open();
})

profileConstants.profileFormCloseButton.addEventListener("click", () => {
  const profileInfo = userInfo.getUserInfo();
  profileConstants.profileTitle.value = profileInfo.name;
  profileConstants.profileSubtitle.value = profileInfo.about;

  profileFormValidator.resetValidation();
  profileModal.open();
});





//<><><><><> FUNCTIONS <><><><><>//

// function openProfileModal() {
//   openModal(modalProfile);
//   profileFormNameInput.value = profileTitle.textContent;
//   profileFormAboutMeInput.value = profileSubtitle.textContent;

// }

// const openModal = (modal) => {
//   modal.classList.add("modal_toggle");
//   modal.addEventListener("click", closeModalClick);
//   document.addEventListener("keydown", closeModalEsc);
// };

// const closeModal = (modal) => {
//   modal.classList.remove("modal_toggle");
//   modal.removeEventListener("click", closeModalClick);
//   document.removeEventListener("keydown", closeModalEsc);
// };

// const closeModalClick = (e) => {

//   if (e.target === e.currentTarget) {
//     closeModal(e.target);
//   };
// };

// const closeModalEsc = (e) => {
//   const modalToggle = document.querySelector(".modal_toggle");
//   if (e.keyCode === 27) {
//     closeModal(modalToggle);
//   };
// };

// function profileFormSubmitHandler(event) {
//   event.preventDefault();
//   profileTitle.textContent = profileFormNameInput.value;
//   profileSubtitle.textContent = profileFormAboutMeInput.value;
//   closeModal(modalProfile);
// }

//<><><><><> CARDS <><><><><>//

// const renderCard = (data, container) => {
//   const newCard = new Card(data, cardSelector).getView();
//   container.prepend(newCard);
// }

// initialCards.forEach((card) => {
//   renderCard(card, elements);
// });

//<><><><><> EVENT LISTENERS <><><><><>// 

// profileFormEL.addEventListener("submit", profileFormSubmitHandler)

// profileEditButton.addEventListener("click", () => {
//   openProfileModal();
// });

// profileAddButton.addEventListener("click", () => {
//   openModal(modalAddCard);
// });

// profileFormCloseButton.addEventListener("click", () => {
//   closeModal(modalProfile);
// });

// addFormCloseButton.addEventListener("click", () => {
//   closeModal(modalAddCard);
//   addFormEl.reset();

// });

// modalImageExpandCloseButton.addEventListener("click", () => {
//   closeModal(modalImageExpand);
// });

// addFormEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const data = {
//     name: addFormPlaceInput.value,
//     link: addFormUrlInput.value,
//   };

//   renderCard(data, elements);
//   closeModal(modalAddCard);

//   addFormValidator.resetValidation();


// });


// //<><><><><> VALIDATION <><><><><>//

// const validationSettings = {

//   formSelector: ".modal__form",
//   inputSelector: ".modal__info",
//   submitButtonSelector: ".modal__save-button",
//   inactiveButtonClass: "modal__save-button_disabled",
//   inputErrorClass: "modal__info_type_error",
//   errorClass: "modal__error_active",
// }


//<><><><><> PROFILE <><><><><>//

// const modalProfile = document.querySelector(".modal_profile");
// const profileFormEL = document.querySelector(".modal__form_type_edit-form");
// const profileEditButton = document.querySelector(".profile__edit-button");
// const profileFormCloseButton = document.querySelector(".modal__close-button_type_profile")
// const profileAddButton = document.querySelector(".profile__add-button");
// const profileFormNameInput = document.querySelector(".modal__info_place_name-input");
// const profileFormAboutMeInput = document.querySelector(".modal__info_place_about-me-input");
// const profileTitle = document.querySelector(".profile__title");
// const profileSubtitle = document.querySelector(".profile__subtitle");

// //<><><><><> ADD CARD <><><><><>//

// const modalAddCard = document.querySelector(".modal_add-card");
// const addFormEl = document.querySelector(".modal__form_type_new-place");
// const addFormCloseButton = document.querySelector(".modal__close-button_type_new-place")
// const addFormPlaceInput = document.querySelector(".modal__info_place_new-title-input");
// const addFormUrlInput = document.querySelector(".modal__info_place_url-input");

// //<><><><><> IMAGE PREVIEW <><><><><>//

// const modalImageExpand = document.querySelector(".modal_type_image-expand");
// const modalImagePreviewEl = modalImageExpand.querySelector(".modal__image-preview");
// const modalImageExpandCloseButton = modalImageExpand.querySelector(".modal__close-button_place_image-expand");
// const modalImageSubtitle = modalImageExpand.querySelector(".modal__image-subtitle")

// //<><><><><> ELEMENTS <><><><><>//

// const cardSelector = '#elements-template';
// const elements = document.querySelector(".elements");

