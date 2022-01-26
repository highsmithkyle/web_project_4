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
        imageExpandModal.open(card)
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
  userNameSelector: profileConstants.profileTitle,
  userDescriptionSelector: profileConstants.profileSubtitle,
});


const profileModal = new PopupWithForm({
  popupSelector: profileConstants.profileModalSelector,

  handleFormSubmit: (data) => {

    userInfo.setUserInfo({
      userName: data.name,
      userDescription: data[`about-me`],
    })
  },
});


const addCardModal = new PopupWithForm({
  popupSelector: addCardConstants.addCardSelector,
  handleFormSubmit: (card) => {

    const newCard = new Card(
      {
        card,
        handlePreviewImage: () => {

          imageExpandModal.open(card)
        },
      },
      cardConstants.cardSelector
    );
    cardList.addItem(newCard.getView())
  },
});

const imageExpandModal = new PopupWithImage(imagePreviewConstants.imagePreviewSelector);

const profileFormValidator = new FormValidator(validationSettings, profileConstants.profileFormEL);
const addFormValidator = new FormValidator(validationSettings, addCardConstants.addFormEl);


profileFormValidator.enableValidation();
addFormValidator.enableValidation();

cardList.renderItems(initialCards);

addCardModal.setEventListeners();
profileModal.setEventListeners();
imageExpandModal.setEventListeners();


// FUNCTIONS //

profileConstants.profileAddButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addCardModal.open();
})

profileConstants.profileEditButton.addEventListener("click", () => {
  const profileInfo = userInfo.getUserInfo();
  profileConstants.profileTitle.value = profileInfo.name;
  profileConstants.profileSubtitle.value = profileInfo.about;

  profileFormValidator.resetValidation();
  profileModal.open();
});





