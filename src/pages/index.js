import * as data from "../utils/constants.js";
import Card from "../components/Сard.js";
import {FormValidator} from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import './index.css';

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
const formCardValidator = new FormValidator(rest, data.submitFormCard);

formProfileValidator.enableValidation();
formCardValidator.enableValidation();

const userInfo = new UserInfo({nameSelector:'.profile__title', majorSelector:'.profile__subtitle'});

const popupCard = new PopupWithForm('.popup_type_new-card', (item)=>{
    createCard({name:item.title, link:item.img});
});

const popupProfile = new PopupWithForm('.popup_type_edit', (item)=>{
    userInfo.setUserInfo(item.name, item.major);
    data.title.textContent = userInfo.getUserInfo().name;
    data.major.textContent = userInfo.getUserInfo().major;
    userInfo.setUserInfo(item.name, item.major);
});

const popupImage = new PopupWithImage('.popup_type_image');

popupCard.setEventListeners();
popupProfile.setEventListeners();
popupImage.setEventListeners();

const formCard = ()=>{
    formCardValidator.resetError();
    popupCard.open();
}

const formProfile = ()=>{
    data.popupTitleProfile.value = userInfo.getUserInfo().name;
    data.popupMajorProfile.value = userInfo.getUserInfo().major;
    formProfileValidator.resetError();
    popupProfile.open();
}

const cardImage = (item)=>{
    popupImage.open(item);
};

data.profileAddButton.addEventListener('click', formCard);
data.profileEditButton.addEventListener('click', formProfile);

function createCard(item){
    const card = new Card({data:item, handleCardClick:cardImage}, '.template__card');
    const cardElement = card.cardGenerate();
    cardList.addItem(cardElement);
}

const cardList = new Section({
        items: data.initialCards,
        renderer: (item)=>{
            createCard(item);
        }},
    '.gallery__list');

cardList.renderItems();

