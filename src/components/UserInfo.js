
export default class UserInfo {
    constructor({ userNameElement, userDescriptionElement, userAvatarElement, userId }) {

        this._userNameEl = userNameElement;
        this._userDescriptionEl = userDescriptionElement;
        this._userAvatarElement = userAvatarElement;
        this._userId = userId;
    }

    getUserInfo() {
        return {
            userName: this._userNameEl.textContent,
            userDescription: this._userDescriptionEl.textContent,
        };
    }


    getId() {
        return this._userId
    }


    setUserInfo(data) {
        this._userNameEl.textContent = data.name;
        this._userDescriptionEl.textContent = data.about;
        this._userAvatarElement.src = data.avatar;
        this._userId = data._id;

    }
}

