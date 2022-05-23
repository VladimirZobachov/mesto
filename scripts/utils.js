import * as data from "./constants.js";
import {Ard} from "./Сard.js";

export const handleEscUp = (evt) => {
    if (evt.which === 27) {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    };
};

export const closePopupOverlay = (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);

    }
}

export function showPopup(popupWindow) {
    popupWindow.classList.add('popup_opened');
    document.addEventListener("keydown", handleEscUp);
    popupWindow.addEventListener('click', closePopupOverlay);
}

export function closePopup(popupWindow) {
    document.removeEventListener('keydown', handleEscUp);
    popupWindow.classList.remove('popup_opened');
    popupWindow.removeEventListener('click', closePopupOverlay);
}

export function saveFormProfile(evt){
    evt.preventDefault();
    data.title.textContent = data.inputName.value;
    data.major.textContent = data.inputMajor.value;
    closePopup(data.submitFormProfile.parentNode.parentNode);
}

export function saveFormCard(evt){
    evt.preventDefault();
    const inputList = Array.from(data.submitFormCard.querySelectorAll('.popup__input'));
    const inactiveButtonClass = 'popup__button_disabled';
    const card = new Ard({name:data.inputTitle.value, link:data.inputImg.value}, '.template__card');
    data.gallery.prepend(card.cardGenerate());
    data.submitFormCard.reset();
    toggleButtonState(inputList, data.submitFormCard.querySelector('.popup__button'),{inactiveButtonClass});
    closePopup(data.submitFormCard.parentNode.parentNode);
}