import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImg = this._popup.querySelector('.popup__gallery-img');
        this._popupTitle = this._popup.querySelector('.popup__title-img');
    }

    open(item) {
        super.open();
        this._popupImg.src = item.link;
        this._popupImg.alt = item.name;
        this._popupTitle.textContent = item.name;
    }
}