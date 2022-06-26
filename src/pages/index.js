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

const formProfileValidator = new FormValidator(data.rest, data.submitFormProfile);
const formCardValidator = new FormValidator(data.rest, data.submitFormCard);
const formAvatarValidator = new FormValidator(data.rest, data.submitFormAvatar);
const userInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar');

formProfileValidator.enableValidation();
formCardValidator.enableValidation();
formAvatarValidator.enableValidation();

Promise.all([api.getUser(), api.getInitialCards()])
    .then(([user, cards])=>{
        userInfo.setUserInfo(user);
        cardList.renderItems(cards);
    })
    .catch((err) => {
        console.log(err);
    });

const popupCard = new PopupWithForm('.popup_type_new-card', (item)=>{
    api.addCard(item.title, item.img)
        .then((result) => {
            cardList.addItem(createCard(result));
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
            userInfo.setUserInfo(result);
            popupProfile.close();
        })
        .catch((err) => {
            console.log(err);
        });
});

const popupAvatar = new PopupWithForm('.popup_type_edit-avatar', (item)=>{
    api.setAvatar(item.avatar)
        .then((result) => {
            userInfo.setUserInfo(result);
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

const openFormCard = ()=>{
    formCardValidator.resetError();
    popupCard.open();
}

const openFormProfile = ()=>{
    data.popupTitleProfile.value = userInfo.getUserInfo().name.textContent;
    data.popupMajorProfile.value = userInfo.getUserInfo().major.textContent;
    formProfileValidator.resetError();
    popupProfile.open();
}

const openFormAvatar = ()=>{
    formProfileValidator.resetError();
    popupAvatar.open();
}

const openCardImage = (item)=>{
    popupImage.open(item);
};

data.profileAddButton.addEventListener('click', openFormCard);
data.profileEditButton.addEventListener('click', openFormProfile);
data.profileEditAvatar.addEventListener('click', openFormAvatar);

function createCard(item){
    const card = new Card({
        data:item,
        handleCardClick: openCardImage,
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
    return cardElement;
}

const cardList = new Section(
        (item)=>{
            cardList.addItem(createCard(item));
        },
    '.gallery__list');




