export default class Popup {
    constructor(popupSelector) {
        this._modalElement = document.querySelector(`.${modalSelector}`);
        this._handleEscClose = this._handleEscapeClose.bind(this);
    }

    _handleEscClose(evt) {
        evt.preventDefault();
        if (evt.keyCode === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._modalElement.addEventListener("click", (e) => {
            if (
                e.target.classList.contains("modal") ||
                e.target.classList.contains("modal__close-button")
            ) {
                this.close();
            }
        });
    }



    open() {
        this._modalElement.classList.add("modal_toggle");
        document.addEventListener("keydown", this._handleEscClose);
        // this._modalElement.addEventListener("click", this._handleEscClose);
    }

    close() {
        this._modalElement.classList.remove("modal_toggle");
        document.removeEventListener("keydown", this._handleEscClose);
        // this._modalElement.removeEventListener("click", closeModalClick);
    }
}

