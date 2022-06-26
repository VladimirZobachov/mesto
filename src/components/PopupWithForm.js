import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{

    constructor(popupSelector, callbackSubmitForm) {
        super(popupSelector);
        this._callbackSubmitForm = callbackSubmitForm;
        this._form = this._popup.querySelector('.popup__form');
    }

    _getInputValues(){
        const listInputs = this._form.querySelectorAll('.popup__input');
        this._listInputs = {};
        listInputs.forEach((item)=>{
            this._listInputs[item.name] = item.value;
        })
        return this._listInputs;
    }

    close() {
        super.close();
        this._form.reset();
    }

    open() {
        this.loading("Сохранить")
        super.open();
    }

    loading(textButton){
        const submitButton = this._form.querySelector('.popup__button');
        submitButton.textContent = textButton;
    }

    _submitForm = (evt)=>{
        evt.preventDefault();
        this.loading("Сохранение...")
        this._callbackSubmitForm(this._getInputValues());
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitForm);
    }

}