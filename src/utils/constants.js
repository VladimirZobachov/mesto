const arhis = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
const chelArea = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg';
const ivanovo = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg';
const kamchatka = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg';
const holmArea = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg';
const baikal = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';

export const initialCards = [
    {
        name: 'Архыз',
        link: arhis
    },
    {
        name: 'Челябинская область',
        link: chelArea
    },
    {
        name: 'Иваново',
        link: ivanovo
    },
    {
        name: 'Камчатка',
        link: kamchatka
    },
    {
        name: 'Холмогорский район',
        link: holmArea
    },
    {
        name: 'Байкал',
        link: baikal
    }
];


export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileEditAvatar = document.querySelector('.profile__avatar-edit');
export const profileAddButton = document.querySelector('.profile__add-button');
export const submitFormProfile = document.querySelector('.popup__form-profile');
export const submitFormCard = document.querySelector('.popup__form-card');
export const submitFormAvatar = document.querySelector('.popup__form-avatar');
export const popupTitleProfile = document.querySelector('.popup__input_type_name');
export const popupMajorProfile = document.querySelector('.popup__input_type_major');

export const rest = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-error',
    errorMessageClass: 'popup__error-message',
    errorClass: 'popup__error_visible'
};
