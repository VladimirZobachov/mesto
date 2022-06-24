export default class UserInfo{
    constructor() {
        this._name = "";
        this._major = "";
    }

    getUserInfo(){
        return {name: this._name, major: this._major};
    }

    setUserInfo(name, major){
        this._name = name;
        this._major = major;
    }
}