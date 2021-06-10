
// modal toggle

const modalOpen = document.querySelector("modal__open");


// Profile //

const modalProfile = document.querySelector(".modal_profile");
const profileFormEL = document.querySelector(".modal__form_type_edit-form");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileFormCloseButton = document.querySelector(".modal__close-button_type_profile")
const profileAddButton = document.querySelector(".profile__add-button");
const profileFormNameInput = document.querySelector(".modal__info_place_name-input");
const profileFormAboutMeInput = document.querySelector(".modal__info_place_about-me-input");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

// Add Card 

const modalAddCard = document.querySelector(".modal_add-card");
const addFormEl = document.querySelector(".modal__form_type_new-place");
const addFormCloseButton = document.querySelector(".modal__close-button_type_new-place")
const addFormPlaceInput = document.querySelector(".modal__info_place_new-title-input");
const addFormUrlInput = document.querySelector(".modal__info_place_url-input");
const elementsText = document.querySelector(".elements__text");
const elements = document.querySelector(".elements");



// functions

function openModal() {
  modalProfile.classList.add("modal_open");
  profileFormNameInput.value = profileTitle.textContent; 
  profileFormAboutMeInput.value = profileSubtitle.textContent;//
}

function toggleModal(modalElement) {
  modalElement.classList.toggle("modal_open");
}


function formSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileFormNameInput.value; 
  profileSubtitle.textContent = profileFormAboutMeInput.value;//
  toggleModal(modalProfile);
}



function renderCard(cardTempClone, container) {
  container.append(cardTempClone);
}

function generateCard(card) {
  const cardTemplateClone = cardTemplate.cloneNode(true);
  const cardNameElement = cardTemplateClone.querySelector(".elements__text");
  const cardImageElement = cardTemplateClone.querySelector(".elements__image");
  cardNameElement.textContent = card.name;
  cardImageElement.src = card.link
  return cardTemplateClone;

}


// Template //

const cardTemplate = document.querySelector("#elements-template").content.querySelector(".elements__container");

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];


// Event Listeners // 

profileFormEL.addEventListener("submit", formSubmit)

profileEditButton.addEventListener("click", () => {
  toggleModal(modalProfile);
});

profileFormCloseButton.addEventListener("click", () => {
  toggleModal(modalProfile);
});

addFormCloseButton.addEventListener("click", () => {
  toggleModal(modalAddCard);
});

profileAddButton.addEventListener("click", () => {
  toggleModal(modalAddCard);
});



initialCards.forEach((card) => {
  const cardElement = generateCard(card);
  renderCard(cardElement, elements);

});






