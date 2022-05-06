const showInputError = (formElement, inputElement, errorMessage, {errorClass, inputErrorClass,...rest}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, {errorClass, inputErrorClass,...rest}) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, {errorClass, inputErrorClass,...rest}) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, {errorClass, inputErrorClass,rest});
    } else {
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
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});