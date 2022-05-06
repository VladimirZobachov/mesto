const showInputError = (formElement, inputElement, errorMessage, {errorClass, inputErrorClass,errorMessageClass,...rest}) => {
    const errorElement = formElement.querySelector(`.popup__error-message_${inputElement.id}`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, {errorClass, inputErrorClass,...rest}) => {
    const errorElement = formElement.querySelector(`.popup__error-message_${inputElement.id}`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, {errorClass, inputErrorClass,...rest}) => {
    if (!inputElement.validity.valid) {
        inputElement.classList.add(inputErrorClass);
        showInputError(formElement, inputElement, inputElement.validationMessage, {errorClass, inputErrorClass,rest});
    } else {
        inputElement.classList.remove(inputErrorClass);
        hideInputError(formElement, inputElement, {errorClass, inputErrorClass,rest});
    }
};

const setEventListeners = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, errorClass, inputErrorClass, ...rest}) => {
        const inputList = Array.from(formElement.querySelectorAll(inputSelector));
        const buttonElement = formElement.querySelector(submitButtonSelector);
        toggleButtonState(inputList, buttonElement, {inactiveButtonClass, rest});

        inputList.forEach((inputElement)=>{
            inputElement.addEventListener('input', function () {
                checkInputValidity(formElement, inputElement, {errorClass, inputErrorClass, rest});
                toggleButtonState(inputList, buttonElement, {inactiveButtonClass, rest});
            });
        })
};

const hasInvalidInput = (inputList) =>{
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

const toggleButtonState = (inputList, buttonElement, {inactiveButtonClass,...rest}) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
    }
}

const enableValidation = ({formSelector,inputSelector,submitButtonSelector,inactiveButtonClass,...rest}) => {

    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, {inputSelector,submitButtonSelector,inactiveButtonClass,rest});
    });
};



enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-error',
    errorMessageClass: 'popup__error-message',
    errorClass: 'popup__error_visible'
});