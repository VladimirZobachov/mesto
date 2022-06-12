export default class UserInfo{
    constructor(name, major) {
        this._userinfo = {name: name, major: major};
    }

    getUserInfo(){
        return this._userinfo;
    }

    setUserInfo(name, major){
        this._userinfo = {name: name, major: major};
    }
}