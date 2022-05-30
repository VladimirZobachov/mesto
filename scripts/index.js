import * as data from "./constants.js";
import {Card} from "./Сard.js";
import * as utils from "./utils.js";
import {FormValidator} from "./FormValidator.js";
import {closePopup} from "./utils.js";

function createCard(item){
    const card = new Card(item, '.template__card');
    const cardElement = card.cardGenerate();
    return cardElement;
}

function saveFormProfile(evt){
    evt.preventDefault();
    data.title.textContent = data.inputName.value;
    data.major.textContent = data.inputMajor.value;
    closePopup(data.popupEdit);
}

function saveFormCard(evt){
    evt.preventDefault();
    data.gallery.prepend(createCard({name: data.inputTitle.value, link: data.inputImg.value}));
    formCardValidator._toggleButtonState();
    closePopup(data.popupNewCard);
}

data.profileEditButton.addEventListener('click', function (){
    data.popupTitle.value = data.title.textContent;
    data.popupMajor.value = data.major.textContent;
    utils.showPopup(data.popupEdit);
});

data.profileAddButton.addEventListener('click', function (){
    utils.showPopup(data.popupNewCard);
});

data.submitFormProfile.addEventListener('submit', saveFormProfile);

data.submitFormCard.addEventListener('submit', saveFormCard);

const renderElements = () => {
    data.gallery.innerHTML = '';
    data.initialCards.forEach((item) => {
        const cardElement = createCard(item);
        data.gallery.append(cardElement);
    });
};

renderElements();

const rest = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-error',
    errorMessageClass: 'popup__error-message',
    errorClass: 'popup__error_visible'
};

const formProfileValidator = new FormValidator(rest, data.submitFormProfile);
formProfileValidator.enableValidation();

const formCardValidator = new FormValidator(rest, data.submitFormCard);
formCardValidator.enableValidation();