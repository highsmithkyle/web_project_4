const editFormEL = document.querySelector(".modal__edit-form");
const editFormNameInput = document.querySelector(".modal__info_name-input");
const editFormAboutMeInput = document.querySelector(".modal__info_about-me-input");
const profileEditButton = document.querySelector(".profile__edit-button");
const formCloseButton = document.querySelector(".modal__close-button")
const modalEl = document.querySelector(".modal");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const elementsText = document.querySelector(".elements__text");


function closeModal() {
  modalEl.classList.remove("modal_open");
}

function openModal() {
  modalEl.classList.add("modal_open");
}



profileEditButton.addEventListener("click", function () {
  openModal();
});

formCloseButton.addEventListener("click", function () {
  closeModal();
});



editFormNameInput.value = profileTitle.textContent;
editFormAboutMeInput.value = profileSubtitle.textContent;


editFormEL.addEventListener("submit", function (event) {
  event.preventDefault();
  profileTitle.textContent = editFormNameInput.value;
  profileSubtitle.textContent = editFormAboutMeInput.value;
  closeModal();
});



var onresize = function() 
{
  var width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
  console.log(width);
}