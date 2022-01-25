

class UserInfo {
    constructor({ userNameSelector, userDescriptionSelector }) {
        // debugger;
        this._userNameEl = userNameSelector;
        this._userDescriptionEl = userDescriptionSelector;
    }

    getUserInfo() {
        return {
            userName: this._userNameEl.textContent,
            userDescription: this._userDescriptionEl.textContent,
        };
    }

    setUserInfo({ userName, userDescription }) {
        // debugger;
        this._userNameEl.textContent = userName;
        this._userDescriptionEl.textContent = userDescription;
    }
}

export default UserInfo