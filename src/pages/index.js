import * as data from "../utils/constants.js";
import Card from "../components/Сard.js";
import {FormValidator} from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js"
import './index.css';
import PopupWithSubmit from "../components/PopupWithSubmit";

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
    headers: {
        authorization: '661151b8-675b-4416-83fc-3d0035514aa7',
        'Content-Type': 'application/json'
    }
});

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
const userInfo = new UserInfo();

formProfileValidator.enableValidation();
formCardValidator.enableValidation();

api.getUser().then((result)=>{
    data.title.textContent = result.name;
    data.major.textContent = result.about;
    userInfo.setUserInfo(result.name, result.about);
});

const popupCard = new PopupWithForm('.popup_type_new-card', (item)=>{
    createCard({name:item.title, link:item.img});
});

const popupDelCard = new PopupWithSubmit('.popup_type_del-card', (item)=>{
    api.delCard(item).then();
})

const popupProfile = new PopupWithForm('.popup_type_edit', (item)=>{
    userInfo.setUserInfo(item.name, item.major);
    data.title.textContent = userInfo.getUserInfo().name;
    data.major.textContent = userInfo.getUserInfo().major;
    userInfo.setUserInfo(item.name, item.major);
    api.setUser(item.name, item.major).then();
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
    const card = new Card({
        data:item,
        handleCardClick: cardImage,
        handleLikeClick: (id)=>{
            api.addLike(id).then();
        },
        handleDeleteIconClick: (id)=>{
            popupDelCard(id);
        }

    }, '.template__card');
    const cardElement = card.cardGenerate();
    cardList.addItem(cardElement);
    api.addCard(item.name, item.link).then();
}

const cardList = new Section(
        (item)=>{
            createCard(item);
        },
    '.gallery__list');

api.getInitialCards().then((result)=>{
    cardList.renderItems(result);
});






