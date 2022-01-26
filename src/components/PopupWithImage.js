import Popup from './Popup';


class PopupWithImage extends Popup {
    open({ link, name }) {
        this._modalElement.querySelector(".modal__image-subtitle").textContent = name;
        const image = this._modalElement.querySelector(".modal__image-preview");
        image.src = link;
        image.alt = name;
        super.open();

    }
}

export default PopupWithImage;