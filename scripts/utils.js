import * as data from "./constants.js";
import {Card} from "./Сard.js";

export const handleEscUp = (evt) => {
    if (evt.key === "Escape") {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    };
};

export const closePopupOut = (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(evt.currentTarget);

    }
}

export function showPopup(popupWindow) {
    popupWindow.classList.add('popup_opened');
    document.addEventListener("keydown", handleEscUp);
    popupWindow.addEventListener('click', closePopupOut);
}

export function closePopup(popupWindow) {
    document.removeEventListener('keydown', handleEscUp);
    popupWindow.classList.remove('popup_opened');
    popupWindow.removeEventListener('click', closePopupOut);
}


