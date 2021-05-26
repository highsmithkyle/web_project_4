

const editFormEL = document.querySelector(".modal__edit-form");
const editFormNameInput = document.querySelector(".modal__info_place_name-input");
const editFormAboutMeInput = document.querySelector(".modal__info_place_about-me-input");
const profileEditButton = document.querySelector(".profile__edit-button");
const formCloseButton = document.querySelector(".modal__close-button")
const modalEl = document.querySelector(".modal");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const elementsText = document.querySelector(".elements__text");



function openModal() {
  modalEl.classList.add("modal_open");
  editFormNameInput.value = profileTitle.textContent;
  editFormAboutMeInput.value = profileSubtitle.textContent;
}


function closeModal() {
  modalEl.classList.remove("modal_open");
}

function formSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = editFormNameInput.value;
  profileSubtitle.textContent = editFormAboutMeInput.value;
  closeModal();
}



editFormEL.addEventListener("submit", formSubmit)

profileEditButton.addEventListener("click", openModal);

formCloseButton.addEventListener("click", closeModal);









