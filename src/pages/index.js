import "./index.css"

import {
  cardConstants,
  avatarConstants,
  profileConstants,
  addCardConstants,
  imagePreviewConstants,
  validationSettings,
} from "../utils/constants";


import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js"
// import initialCards from "../utils/InitialCards.js"
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo";
import Api from "../components/Api"






const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "f4ba53cb-c4b1-4360-b78c-98b41af44bf6",
    "Content-Type": "application/json",
  },
});

const initialProfile = api.getInitialProfile();
const initialCards = api.getInitialCards();

Promise.all([initialProfile, initialCards])

  .then(([userData, cards]) => {
    // debugger;
    userInfo.setUserInfo(userData);
    cardList.renderItems(cards);
  })
  .catch((err) => {
    console.error(err);
  });



const createCard = (data) => {
  const card = new Card(
    {
      data,
      handlePreviewImage: () => {
        imageExpandModal.open(data)
      },
      handleDeleteIcon: (evt) => {
        deleteCard.open(evt, card_id);
      },
      handleLikeIcon: (buttonLiked) => {
        return buttonLiked ? api.likeCard(card._id) : api.removeLike(card._id)
      },
      userId: userInfo.getId(),
    },
    cardConstants.cardSelector
  );
  return card
}


const cardList = new Section(
  {
    renderer: (card) => {


      const newCard = createCard(card);
      const cardElement = newCard.getView();
      cardList.addItem(cardElement);
    },
  },
  cardConstants.placeSelector
);


const userInfo = new UserInfo({

  userNameElement: profileConstants.profileTitle,
  userDescriptionElement: profileConstants.profileSubtitle,
  userAvatarElement: avatarConstants.avatarElement,
});




const addCardModal = new PopupWithForm({
  popupSelector: addCardConstants.addCardSelector,
  handleFormSubmit: (card) => {
    loadingHandler(true, addCardConstants.modalSelector, "Generating");
    api.fetchCard(card).then((cardData) => {
      const newCard = createCard(cardData);
      cardList.addItem(newCard.getView());
      addCardModal.close()
    })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        loadingHandler(false, addCardConstants.addCardSelector, "create")
      })

  },
});


// const profileModal = new PopupWithForm({
//   popupSelector: profileConstants.profileModalSelector,
//   handleFormSubmit: (data) => {

//     userInfo.setUserInfo({
//       userName: data.name,
//       userDescription: data[`about-me`],
//     })
//   },
// });








const imageExpandModal = new PopupWithImage(imagePreviewConstants.imagePreviewSelector);

const profileFormValidator = new FormValidator(validationSettings, profileConstants.profileFormEL);
const addFormValidator = new FormValidator(validationSettings, addCardConstants.addFormEl);
const avatarFormValidator = new FormValidator(validationSettings, avatarConstants.avatarFormEl);



profileFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();

// addCardModal.setEventListeners();
// profileModal.setEventListeners();
imageExpandModal.setEventListeners();


// cardList.renderItems(initialCards);


// Buttons //


profileConstants.profileAddButton.addEventListener("click", () => {
  addFormValidator.resetValidation();
  addCardModal.open();
})

profileConstants.profileEditButton.addEventListener("click", () => {

  const profileInfo = userInfo.getUserInfo();
  profileConstants.profileFormNameInput.value = profileInfo.userName;
  profileConstants.profileFormAboutMeInput.value = profileInfo.userDescription;
  profileModal.open();
  profileModal.resetValidation();
});

// avatarConstants.avatarEditButton.addEventListener("click", () => {

// })



