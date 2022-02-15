
export default class UserInfo {
    constructor({ userNameElement, userDescriptionElement, userAvatarElement, }) {

        this._userNameEl = userNameElement;
        this._userDescriptionEl = userDescriptionElement;
        this._userAvatarElement = userAvatarElement;
    }

    getUserInfo() {
        return {
            userName: this._userNameEl.textContent,
            userDescription: this._userDescriptionEl.textContent,
        };
    }

    setUserInfo(data) {
        // debugger;
        this._userNameEl.textContent = data.name;
        this._userDescriptionEl.textContent = data.about;
        this._userAvatarElement.src = data.avatar;
        this._userId = data._id;
    }

    getId() {
        return this._userId
    }

    setAvatarImage() {
        this.userAvatarElement.src = data.avatar;
    }

}

