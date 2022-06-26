import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup{

    constructor(popupSelector, callbackSubmitForm) {
        super(popupSelector);
        this._callbackSubmitForm = callbackSubmitForm;
        this._form = this._popup.querySelector('.popup__form');
    }

    _submitForm = (evt)=>{
        evt.preventDefault();
        this._callbackSubmitForm(this._id);
    }

    close() {
        super.close();
    }

    open() {
        super.open();
    }

    setHandleSubmit(id){
        this._id = id;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitForm);
    }
}