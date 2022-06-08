const Arhis = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg';
const ChelArea = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg';
const Ivanovo = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg';
const Kamchatka = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg';
const HolmArea = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg';
const Baikal = 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg';

export const initialCards = [
    {
        name: 'Архыз',
        link: Arhis
    },
    {
        name: 'Челябинская область',
        link: ChelArea
    },
    {
        name: 'Иваново',
        link: Ivanovo
    },
    {
        name: 'Камчатка',
        link: Kamchatka
    },
    {
        name: 'Холмогорский район',
        link: HolmArea
    },
    {
        name: 'Байкал',
        link: Baikal
    }
];

export const gallery = document.querySelector(".gallery__list");
export const title = document.querySelector('.profile__title');
export const major = document.querySelector('.profile__subtitle');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileAddButton = document.querySelector('.profile__add-button');
export const popupNewCard = document.querySelector('.popup_type_new-card');
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupImage = document.querySelector('.popup_type_image');
export const submitFormProfile = document.querySelector('.popup__form-profile');
export const submitFormCard = document.querySelector('.popup__form-card');
export const inputName = document.querySelector('.popup__input_type_name');
export const inputMajor = document.querySelector('.popup__input_type_major');
export const popupTitle = popupEdit.querySelector('.popup__input_type_name');
export const popupMajor = popupEdit.querySelector('.popup__input_type_major');
export const inputTitle = document.querySelector('.popup__input_type_title');
export const inputImg = document.querySelector('.popup__input_type_img');
export const buttonCloseProfile = document.querySelector('.popup__close-button_type_profile');
export const buttonCloseCard = document.querySelector('.popup__close-button_type_card');
export const buttonCloseImg = document.querySelector('.popup__close-button_type_img');
