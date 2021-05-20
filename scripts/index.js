const editFormEL = document.querySelector(".modal__edit-form");
const editFormNameInput = document.querySelector(".modal__name-input");
const editFormAboutMeInput = document.querySelector(".modal__about-me-input");
const profileEditButton = document.querySelector(".profile__edit-button");
const formCloseButton = document.querySelector(".modal__close-button")
const modalEl = document.querySelector(".modal");

const profileTitle = document.querySelector(".profile__title");

const profileSubtitle = document.querySelector(".profile__subtitle");

profileEditButton.addEventListener("click", function () {
    
    modalEl.classList.add("modal_open");
  });

  formCloseButton.addEventListener("click", function () {
    
    modalEl.classList.remove("modal_open");
  });

  editFormNameInput.value = profileTitle.textContent;  
  editFormAboutMeInput.value = profileSubtitle.textContent;  




