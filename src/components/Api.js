export default class Api {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
    }

    _checkErrors(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject("Error");
    }

    getInitialProfile() {

        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers,
        }).then((res) => this._checkErrors(res))
    }

    getInitialCards() {
        // debugger;
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers,
        }).then((res) => this._checkErrors(res))
    }


}