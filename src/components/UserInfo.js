class UserInfo {
    constructor({ userNameSelector, userDescriptionSelector }) {
        debugger;
        this._userNameElement = userNameSelector;
        this._userDescriptionSelector = userDescriptionSelector;
    }

    getUserInfo() {
        return {
            userName: this._userNameElement.textContent,
            userDescription: this._userDescriptionEl.textContent,
        };
    }

    setUserInfo({ userName, userDescription }) {
        this._userNameElement.textContent = userName;
        this._userDescriptionEl.textContent = userDescription;
    }
}

export default UserInfo