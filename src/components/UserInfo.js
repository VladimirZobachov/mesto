export default class UserInfo{
    constructor() {
        this._name = "";
        this._major = "";
        this._avatar = "";
        this._id = "";
    }

    getUserInfo(){
        return {name: this._name, major: this._major, avatar: this._avatar, id: this._id};
    }

    setUserInfo(name, major, avatar, id){
        this._name = name;
        this._major = major;
        this._avatar = avatar;
        this._id = id;
    }
}