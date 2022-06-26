import * as data from "../utils/constants";

export default class UserInfo{
    constructor(nameSelector, majorSelector, avatarSelector) {
        this._name = document.querySelector(nameSelector);
        this._major = document.querySelector(majorSelector);
        this._avatar = document.querySelector(avatarSelector);
        this._id = "";
    }

    getUserInfo(){
        return {name: this._name, major: this._major, avatar: this._avatar, id: this._id};
    }

    setUserInfo(data){
        this._name.textContent = data.name;
        this._major.textContent = data.about;
        this._avatar.setAttribute("style", `background-image:url("${data.avatar}")`);
        this._id = data._id;
    }
}