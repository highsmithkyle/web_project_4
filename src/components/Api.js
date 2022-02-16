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

        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers,
        }).then((res) => this._checkErrors(res))
    }

    fetchCard({ name, link }) {
        debugger;
        return fetch(`${this.baseUrl}/cards`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({ name, link }),
        }).then((res) => this._checkErrors(res))
    }

    fetchProfileInfo({ name, about }) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({ name: name, about: about }),
        }).then((res) => this._checkErrors(res))
    }

}