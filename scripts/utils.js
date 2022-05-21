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