export default class UserInfo{
    constructor({nameSelector, majorSelector}) {
        this._name = document.querySelector(nameSelector).textContent;
        this._major = document.querySelector(majorSelector).textContent;
        this._userinfo = {name:this._name, major: this._major};
    }

    getUserInfo(){
        return this._userinfo;
    }

    setUserInfo(name, major){
        this._userinfo = {name: name, major: major};
    }
}