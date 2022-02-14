export default class Api {
    constructor(baseUrl, headers) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }


    _checkErrors(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject("Error");
    }

    getInitialProfile() {
        // debugger;
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

    fetchCard({ name, link }) {
        return fetch(`${this.baseUrl}/cards`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({ name, link })
        }).then((res) => this._checkErrors(res));
    }

    fetchProfileInfo({ name, about }) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({ name: name, about: about }),
        }).then((res) => this._checkErrors(res));
    }


}

