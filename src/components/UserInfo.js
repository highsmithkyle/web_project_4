
export default class UserInfo {
    constructor({ userNameElement, userDescriptionElement, userAvatarElement, }) {

        this._userNameEl = userNameElement;
        this._userDescriptionEl = userDescriptionElement;
        this.userAvatarElement = userAvatarElement;
    }

    getUserInfo() {
        return {
            userName: this._userNameEl.textContent,
            userDescription: this._userDescriptionEl.textContent,
        };
    }

    setUserInfo({ userName, userDescription }) {

        this._userNameEl.textContent = userName;
        this._userDescriptionEl.textContent = userDescription;
    }


    getId() {
        return this._userId
    }

    setAvatarImage() {
        this.userAvatarElement.src = data.avatar;
    }

}

