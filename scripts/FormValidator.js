export class FormValidator{

    constructor({...rest}, formElement) {
        this._data = {...rest};
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._data.inputSelector));
        this._submitButton = this._formElement.querySelector(this._data.submitButtonSelector);
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
            this._showInputError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput(){
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    _toggleButtonState(){

        this._submitButton.setAttribute('disabled', 'disabled');

        if (this._hasInvalidInput()) {
            this._submitButton.classList.add(this._data.inactiveButtonClass);
            this._submitButton.setAttribute('disabled', 'disabled');
        } else {
            this._submitButton.classList.remove(this._data.inactiveButtonClass);
            this._submitButton.removeAttribute('disabled', 'disabled');
        }
    }

    _setEventListeners(){

        this._toggleButtonState();

        this._inputList.forEach((inputElement)=>{
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        })
    }

    enableValidation(){
        this._setEventListeners();
    }
}


