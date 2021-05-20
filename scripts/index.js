const editFormEL = document.querySelector(".modal__edit-form");
const editFormNameInput = document.querySelector(".modal__name-input");
const editFormAboutMeInput = document.querySelector(".modal__about-me-input");
const profileEditButton = document.querySelector(".profile__edit-button");


profileEditButton.addEventListener("click", function () {
    const modalEl = document.querySelector(".modal");
    modalEl.classList.add("modal_open");
  });


 

