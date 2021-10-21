

const modalImageExpand = document.querySelector(".modal_type_image-expand");
const modalImagePreviewEl = modalImageExpand.querySelector(".modal__image-preview");
const modalImageExpandCloseButton = modalImageExpand.querySelector(".modal__close-button_place_image-expand");
const modalImageSubtitle = modalImageExpand.querySelector(".modal__image-subtitle")



  
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
    if(e.target === modalToggle) {
        closeModal(modalToggle);
    };
  };
  
  const closeModalEsc = (e) => {
    const modalToggle = document.querySelector(".modal_toggle");
    if(e.keyCode === 27) {
        closeModal(modalToggle);
    };
  };
  
  

class Card {

    constructor(data, cardSelector) {

        this._name = data.name;
        this._link = data.link;

        this._cardSelector = cardSelector;

    }

    _getTemplate() {

        const cardElement = document
            .querySelector(this._cardSelector)
            .content.querySelector(".elements__container")
            .cloneNode(true);

        return cardElement
    }


    getView() {


        this._element = this._getTemplate();
        this._setEventListeners();

        const cardImage = this._element.querySelector(".elements__image");

        this._element.querySelector(".elements__text").textContent = this._name
        cardImage.src = this._link;
        cardImage.alt = this._name;

        return this._element;

    }


    _setEventListeners() {
        this._element
            .querySelector(".elements__image")
            .addEventListener("click", () => this._handleImagePreview());

        this._element
            .querySelector(".elements__delete")
            .addEventListener("click", () => this._handleDeleteIcon());

        this._element
            .querySelector(".elements__heart")
            .addEventListener("click", () => this._handleLikeIcon());
    }

    _handleLikeIcon() {
        this._element
            .querySelector(".elements__heart")
            .classList.toggle("elements__heart_active");

    }

    
    _handleDeleteIcon() {
        this._element.remove();
        
    }

    _handleImagePreview() {
        openModal(modalImageExpand)
        modalImageExpand.src = this._link;
        modalImageExpand.alt = this._name;
        modalImageExpand.textContent = this._name
    }


}



export default Card;


