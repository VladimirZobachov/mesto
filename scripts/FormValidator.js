export class FormValidator{

    constructor({...rest}, formElement) {
        this._data = {...rest};
        this._formElement = formElement;
    }

    _showInputError(inputElement){

        const errorElement = this._formElement.querySelector(`.popup__error-message_${inputElement.id}`);
        inputElement.classList.add(this._data.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._data.errorClass);
    }

    _hideInputError(inputElement){

        const errorElement = this._formElement.querySelector(`.popup__error-message_${inputElement.id}`);
        inputElement.classList.remove(this._data.inputErrorClass);
        errorElement.classList.remove(this._data.errorClass);
        errorElement.textContent = '';
    }

    _checkInputValidity(inputElement){

        if (!inputElement.validity.valid) {
            inputElement.classList.add(this._data.inputErrorClass);
            this._showInputError(inputElement);
        } else {
            inputElement.classList.remove(this._data.inputErrorClass);
            this._hideInputError(inputElement);
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
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        })
    }

    enableValidation(){
        this._setEventListeners();
        console.log(this._formElement);
    }
}


