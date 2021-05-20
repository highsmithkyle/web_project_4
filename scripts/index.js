const editformEL = document.querySelector(".modal__edit-form");
const editFormNameInput = document.querySelector(".modal__name-input");
const editFormAboutMeInput = document.querySelector(".modal__about-me-input");
const profileEditButton = document.querySelector(".profile__edit-button");
const modalEl = document.querySelector(".modal");



profileEditButton.addEventListener("click", function () {
    modalEl.classList.add("modal__open");
  });


 

