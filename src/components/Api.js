export default class Api{
    constructor(options) {
        this._options = options;
    }

    getUser(){
        return fetch('https://mesto.nomoreparties.co/v1/cohort-43/users/me', {
            headers: {
                authorization: '661151b8-675b-4416-83fc-3d0035514aa7'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    setUser(name, major){
        return fetch('https://mesto.nomoreparties.co/v1/cohort-43/users/me', {
            method: 'PATCH',
            headers: {
                authorization: '661151b8-675b-4416-83fc-3d0035514aa7',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                about: major
            })
        });
    }

    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-43/cards', {
            headers: {
                authorization: '661151b8-675b-4416-83fc-3d0035514aa7'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    addCard(name, link) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-43/cards', {
            method: 'POST',
            headers: {
                authorization: '661151b8-675b-4416-83fc-3d0035514aa7',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }
    addLike(id){
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-43/cards/${id}/likes`, {
            method: 'PUT',
            headers: {
                authorization: '661151b8-675b-4416-83fc-3d0035514aa7',
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }
    delLike(id){
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-43/cards/${id}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: '661151b8-675b-4416-83fc-3d0035514aa7',
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }
    delCard(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-43/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: '661151b8-675b-4416-83fc-3d0035514aa7',
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }
}