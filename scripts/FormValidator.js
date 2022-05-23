export class FormValidator{

    constructor({...rest}, formElement) {
        this._data = {...rest};
        this._formElement = formElement;
    }


    _showInputError(){

        const errorElement = this._formElement.querySelector(`.popup__error-message_${this._data.inputSelector.id}`);
        this._data.inputSelector.classList.add(this._data.inputErrorClass);
        errorElement.textContent = this._data.inputSelector.validationMessage;
        errorElement.classList.add(this._data.errorClass);
    }

    _hideInputError(){

        const errorElement = this._formElement.querySelector(`.popup__error-message_${this._data.inputSelector.id}`);
        this._data.inputSelector.classList.remove(this._data.inputErrorClass);
        errorElement.classList.remove(this._data.errorClass);
        errorElement.textContent = '';
    }

    _checkInputValidity(){

        if (!this._data.inputSelector.validity.valid) {
            this._data.inputSelector.classList.add(this._data.inputErrorClass);
            this._showInputError();
        } else {
            this._data.inputSelector.classList.remove(this._data.inputErrorClass);
            this._hideInputError();
        }
    }

    _hasInvalidInput(){
        const inputList = Array.from(this._formElement.querySelectorAll(this._data.inputSelector));
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    _toggleButtonState(){
        const buttonElement = this._formElement.querySelector(this._data.submitButtonSelector);
        if (this._hasInvalidInput()) {
            buttonElement.classList.add(this._data.inactiveButtonClass);
        } else {
            buttonElement.classList.remove(this._data.inactiveButtonClass);
        }
    }

    _setEventListeners(){

        const inputList = Array.from(this._formElement.querySelectorAll(this._data.inputSelector));
        this._toggleButtonState();

        inputList.forEach((inputElement)=>{
            inputElement.addEventListener('input', function () {
                this._checkInputValidity();
                this._toggleButtonState();
            });
        })
    }

    enableValidation(){
        const formList = Array.from(document.querySelectorAll(this._data.formSelector));

        formList.forEach((formElement) => {
            this._setEventListeners();
        });
    }
}

const data = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-error',
    errorMessageClass: 'popup__error-message',
    errorClass: 'popup__error_visible'
};
