export default class UserInfo{
    constructor() {
        this._name = "";
        this._major = "";
        this._avatar = "";
    }

    getUserInfo(){
        return {name: this._name, major: this._major, avatar: this._avatar};
    }

    setUserInfo(name, major, avatar){
        this._name = name;
        this._major = major;
        this._avatar = avatar;
    }
}