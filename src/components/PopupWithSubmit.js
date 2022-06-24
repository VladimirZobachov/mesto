import Popup from "./Popup";

export default class PopupWithSubmit extends Popup{

    constructor(popupSelector, callbackSubmitForm) {
        super(popupSelector);
        this._callbackSubmitForm = callbackSubmitForm;
        this._form = this._popup.querySelector('.popup__form');
    }

    _submitForm = (evt)=>{
        evt.preventDefault();
        this._callbackSubmitForm(this._id);
        this.close();
        this._form.reset();
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

    setHandleSubmit(id){
        this._id = id;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitForm);
    }
}