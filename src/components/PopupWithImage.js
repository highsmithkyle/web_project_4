import Popup from './Popup';


class PopupWithImage extends Popup {
    openModal({ link, name }) {
        this._modalElement.querySelector(".modal__image-subtitle").textContent = name;
        const image = this._modalElement.querySelector(".modal__image-preview");
        image.src = link;
        image.alt = `image of ${name}`;
        super.openModal();

    }
}

export default PopupWithImage;