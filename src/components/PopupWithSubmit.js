import Popup from "./Popup";

export default class PopupWithSubmit extends Popup{

    constructor(popupSelector, callbackSubmitForm) {
        super(popupSelector);
        this._callbackSubmitForm = callbackSubmitForm;
        this._form = this._popup.querySelector('.popup__form');
    }

    close() {
        super.close();
        this._form.reset();
        this._form.removeEventListener('submit', this._submitForm);
    }

    open() {
        super.open();
        this._form.addEventListener('submit', this._submitForm);
    }

    handleSubmit(callbackSubmitForm){
        this._callbackSubmitForm = callbackSubmitForm;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitForm);
    }
}