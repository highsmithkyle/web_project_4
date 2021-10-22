
import initialCards from "./InitialCards.js";
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";


//<><><><><> INITIALIZE <><><><><>//

const cardTemplate = document.querySelector("#elements-template").content.querySelector(".elements__container");

//<><><><><> PROFILE <><><><><>//

const modalProfile = document.querySelector(".modal_profile");
const profileFormEL = document.querySelector(".modal__form_type_edit-form");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileFormCloseButton = document.querySelector(".modal__close-button_type_profile")
const profileAddButton = document.querySelector(".profile__add-button");
const profileFormNameInput = document.querySelector(".modal__info_place_name-input");
const profileFormAboutMeInput = document.querySelector(".modal__info_place_about-me-input");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

//<><><><><> ADD CARD <><><><><>//

const modalAddCard = document.querySelector(".modal_add-card");
const addFormEl = document.querySelector(".modal__form_type_new-place");
const addFormCloseButton = document.querySelector(".modal__close-button_type_new-place")
const addFormPlaceInput = document.querySelector(".modal__info_place_new-title-input");
const addFormUrlInput = document.querySelector(".modal__info_place_url-input");

//<><><><><> IMAGE PREVIEW <><><><><>//

const modalImageExpand = document.querySelector(".modal_type_image-expand");
const modalImagePreviewEl = modalImageExpand.querySelector(".modal__image-preview");
const modalImageExpandCloseButton = modalImageExpand.querySelector(".modal__close-button_place_image-expand");
const modalImageSubtitle = modalImageExpand.querySelector(".modal__image-subtitle")

//<><><><><> ELEMENTS <><><><><>//

const cardSelector = '#elements-template';
const elements = document.querySelector(".elements");

//<><><><><> FUNCTIONS <><><><><>//

function openProfileModal() {
  openModal(modalProfile);
  profileFormNameInput.value = profileTitle.textContent;
  profileFormAboutMeInput.value = profileSubtitle.textContent;
  modalProfile.addEventListener("click", closeModalClick);
  document.addEventListener("keydown", closeModalEsc);
}

const openModal = (modal) => {
  modal.classList.add("modal_toggle");
  modal.addEventListener("click", closeModalClick);
  document.addEventListener("keydown", closeModalEsc);
};

const closeModal = (modal) => {
  modal.classList.remove("modal_toggle");
  modal.removeEventListener("click", closeModalClick);
  document.removeEventListener("keydown", closeModalEsc);
};

const closeModalClick = (e) => {
  const modalToggle = document.querySelector(".modal_toggle");
  if (e.target === modalToggle) {
    closeModal(modalToggle);
  };
};

const closeModalEsc = (e) => {
  const modalToggle = document.querySelector(".modal_toggle");
  if (e.keyCode === 27) {
    closeModal(modalToggle);
  };
};

function profileFormSubmitHandler(event) {
  event.preventDefault();
  profileTitle.textContent = profileFormNameInput.value;
  profileSubtitle.textContent = profileFormAboutMeInput.value;
  closeModal(modalProfile);
}

//<><><><><> CARDS <><><><><>//

const renderCard = (data, container) => {
  const card = new Card(data, cardSelector)
  container.append(card.getView());
}

initialCards.forEach((card) => {
  renderCard(card, elements);
});

//<><><><><> EVENT LISTENERS <><><><><>// 

profileFormEL.addEventListener("submit", profileFormSubmitHandler)

profileEditButton.addEventListener("click", () => {
  openProfileModal();
});

profileAddButton.addEventListener("click", () => {
  openModal(modalAddCard);
});

profileFormCloseButton.addEventListener("click", () => {
  closeModal(modalProfile);
});

addFormCloseButton.addEventListener("click", () => {
  closeModal(modalAddCard);
});

modalImageExpandCloseButton.addEventListener("click", () => {
  closeModal(modalImageExpand);
});

addFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = {
    name: addFormPlaceInput.value,
    link: addFormUrlInput.value,
  };

  renderCard(data, elements);
  closeModal(modalAddCard);
});


//<><><><><> VALIDATION <><><><><>//

const validationSettings = {

  inputSelector: ".modal__info",
  submitButtonSelector: ".modal__save-button",
  inactiveButtonClass: "modal__save-button_disabled",
  inputErrorClass: "modal__info_type_error",
  errorClass: "modal__error_active",
}

const profileFormValidator = new FormValidator(validationSettings, profileFormEL);
const addFormValidator = new FormValidator(validationSettings, addFormEl);


profileFormValidator.enableValidation();
addFormValidator.enableValidation();

