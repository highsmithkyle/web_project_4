// Initialize //

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


// Profile 

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
const addFormSubmitButton = document.querySelector(".modal__save-button_type_new-place");

// image preview //

const modalImageExpand = document.querySelector(".modal_type_image-expand");
const modalImagePreviewEl = modalImageExpand.querySelector(".modal__image-preview");
const modalImageExpandCloseButton = modalImageExpand.querySelector(".modal__close-button_place_image-expand");
const modalImageSubtitle = modalImageExpand.querySelector(".modal__image-subtitle")

// elements section


const elementsSection = document.querySelector(".elements");

// Functions //

function openProfileModal() {
  openModal(modalProfile);
  profileFormNameInput.value = profileTitle.textContent;
  profileFormAboutMeInput.value = profileSubtitle.textContent;
}

function openModal(modalElement) {
  modalElement.classList.add("modal_toggle");
  document.addEventListener("keydown", (e) => {
    if (e.keycode === 27) {
      closeModal(modalElement);
    }
  });
}


function closeModal(modalElement) {
  modalElement.classList.remove("modal_toggle");
  document.addEventListener("keydown", (e) => {
    if (e.keycode === 27) {
      closeModal(modalElement);
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "escape") {                           // TEST
    console.log("working")
  }
})




function profileFormSubmitHandler(event) {
  event.preventDefault();
  profileTitle.textContent = profileFormNameInput.value;
  profileSubtitle.textContent = profileFormAboutMeInput.value;
  closeModal(modalProfile);
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
  cardImageElement.addEventListener("click", (e) => {
    const { target } = e;
    openModal(modalImageExpand)
    modalImagePreviewEl.src = card.link
    modalImageSubtitle.textContent = card.name

  });

  const elementsHeart = cardTemplateClone.querySelector(".elements__heart")
  elementsHeart.addEventListener("click", (e) => {
    e.target.classList.toggle("elements__heart_active");
  });

  elementsDeleteButton = cardTemplateClone.querySelector(".elements__delete")
  elementsDeleteButton.addEventListener("click", (e) => {
    cardTemplateClone.remove();
    cardTemplateClone = null;
  });

  return cardTemplateClone;

}


// Event Listeners 

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
  const addedCard = {
    name: addFormPlaceInput.value,
    link: addFormUrlInput.value,
  };
  const cardElement = generateCard(addedCard);
  renderCard(cardElement, elements);
  closeModal(modalAddCard);
});


initialCards.forEach((card) => {
  const cardElement = generateCard(card);
  renderCard(cardElement, elements);

});

