import * as data from "./constants.js";
import Card from "./scripts/components/Сard.js";
import {FormValidator} from "./scripts/components/FormValidator.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import Section from "./scripts/components/Section.js";
import UserInfo from "./scripts/components/UserInfo.js";
import './pages/index.css';

const formCard = (item)=>{
    const popup = new PopupWithForm('.popup_type_new-card', (item)=>{
        cardList.addItem({name:item.title, link:item.img});
    });
    popup.open();
    popup.setEventListeners();
}

const formProfile = (item)=>{
    const popup = new PopupWithForm('.popup_type_edit', (item)=>{
        const userInfo = new UserInfo(item.name, item.major);
        data.title.textContent = userInfo.getUserInfo().name;
        data.major.textContent = userInfo.getUserInfo().major;
        userInfo.setUserInfo(item.name, item.major);
    });
    popup.open();
    popup.setEventListeners();
}

data.profileAddButton.addEventListener('click', formCard);
data.profileEditButton.addEventListener('click', formProfile);


const cardImage = (item)=>{
    const popup = new PopupWithImage('.popup_type_image');
    popup.open(item);
    popup.setEventListeners();
};

function createCard(item){
    const card = new Card({data:item, handleCardClick:cardImage}, '.template__card');
    const cardElement = card.cardGenerate();
    return cardElement;
}

const cardList = new Section({
        items: data.initialCards,
        renderer: createCard},
    '.gallery__list');

cardList.renderItems();

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