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

export const title = document.querySelector('.profile__title');
export const major = document.querySelector('.profile__subtitle');
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileAddButton = document.querySelector('.profile__add-button');
export const submitFormProfile = document.querySelector('.popup__form-profile');
export const submitFormCard = document.querySelector('.popup__form-card');
