export default class Popup {
    constructor(popupSelector) {
        this._modalElement = document.querySelector(`.${popupSelector}`);
        this._handleEscClose = this._handleEscClose.bind(this);
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

    _handleEscClose(e) {

        if (e.key === "Escape") {
            this.close();
        }
    }

    open() {
        this._modalElement.classList.add("modal_toggle");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close() {
        this._modalElement.classList.remove("modal_toggle");
        document.removeEventListener("keydown", this._handleEscClose);
    }
}

