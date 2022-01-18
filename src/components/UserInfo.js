class UserInfo {
    constructor({ userNameSelector, userDescriptionSelector }) {
        this._userNameSelector = userNameSelector;
        this._userDescriptionSelector = userDescriptionSelector;
    }

    getUserInfo() {
        return {
            userName: this._userNameEl.textContent,
            userDescription: this._userDescriptionEl.textContent,
        };
    }

    setUserInfo({ userName, userDescription }) {
        this._userNameElement.textContent = userName;
        this._userDescriptionEl.textContent = userDescription;
    }
}

export default UserInfo