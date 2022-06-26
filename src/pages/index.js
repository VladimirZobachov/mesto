import * as data from "../utils/constants.js";
import Card from "../components/Сard.js";
import {FormValidator} from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js"
import './index.css';
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

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
const formAvatarValidator = new FormValidator(rest, data.submitFormAvatar);
const userInfo = new UserInfo();

formProfileValidator.enableValidation();
formCardValidator.enableValidation();
formAvatarValidator.enableValidation();

api.getUser()
    .then((result)=>{
        data.title.textContent = result.name;
        data.major.textContent = result.about;
        data.avatar.setAttribute("style", `background-image:url("${result.avatar}")`);
        userInfo.setUserInfo(result.name, result.about, result.avatar, result._id);

        api.getInitialCards()
            .then((result)=>{
                cardList.renderItems(result);
            })
            .catch((err)=>{
                console.log(err);
            });
    })
    .catch((err) => {
    console.log(err);
});

const popupCard = new PopupWithForm('.popup_type_new-card', (item)=>{
    api.addCard(item.title, item.img)
        .then((result) => {
            createCard(result);
            popupCard.close();
        })
        .catch((err) => {
            console.log(err);
        });
});

const popupDelCard = new PopupWithConfirmation('.popup_type_del-card', (item)=>{
    api.delCard(item.getId())
        .then((result) => {
            item.delCard();
            popupDelCard.close();
        })
        .catch((err) => {
            console.log(err);
        });
})

const popupProfile = new PopupWithForm('.popup_type_edit', (item)=>{
    api.setUser(item.name, item.major)
        .then((result) => {
            userInfo.setUserInfo(item.name, item.major);
            data.title.textContent = userInfo.getUserInfo().name;
            data.major.textContent = userInfo.getUserInfo().major;
            popupProfile.loading("Сохранено!");
            popupProfile.close();
        })
        .catch((err) => {
            console.log(err);
        });
});

const popupAvatar = new PopupWithForm('.popup_type_edit-avatar', (item)=>{
    api.setAvatar(item.avatar)
        .then((result) => {
            data.avatar.setAttribute("style", `background-image:url("${result.avatar}")`);
            popupAvatar.close();
        })
        .catch((err) => {
            console.log(err);
        });
});

const popupImage = new PopupWithImage('.popup_type_image');

popupCard.setEventListeners();
popupProfile.setEventListeners();
popupImage.setEventListeners();
popupDelCard.setEventListeners();
popupAvatar.setEventListeners();

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

const formAvatar = ()=>{
    formProfileValidator.resetError();
    popupAvatar.open();
}

const cardImage = (item)=>{
    popupImage.open(item);
};

data.profileAddButton.addEventListener('click', formCard);
data.profileEditButton.addEventListener('click', formProfile);
data.profileEditAvatar.addEventListener('click', formAvatar);

function createCard(item){
    const card = new Card({
        data:item,
        handleCardClick: cardImage,
        handleAddLikeClick: (id)=>{
            api.addLike(id)
                .then((result) => {
                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        handleDelLikeClick: (id)=>{
            api.delLike(id)
                .then((result) => {
                    console.log(result);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        handleDeleteIconClick: (card)=>{
            popupDelCard.open();
            popupDelCard.setHandleSubmit(card);
        },
        userId: userInfo.getUserInfo().id
    }, '.template__card');
    const cardElement = card.cardGenerate();
    cardList.addItem(cardElement);
}

const cardList = new Section(
        (item)=>{
            createCard(item);
        },
    '.gallery__list');




