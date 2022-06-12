import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(item) {
        super.open();
        const popupImg = this._popup.querySelector('.popup__gallery-img');
        const popupTitle = this._popup.querySelector('.popup__title-img');
        popupImg.src = item.link;
        popupImg.alt = item.name;
        popupTitle.textContent = item.name;
    }

    close() {
        super.close();
    }

    setEventListeners() {
        super.setEventListeners();
    }
}