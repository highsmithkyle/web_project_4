
export default class UserInfo {
    constructor({ userNameElement, userDescriptionElement }) {

        this._userNameEl = userNameElement;
        this._userDescriptionEl = userDescriptionElement;
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
}
