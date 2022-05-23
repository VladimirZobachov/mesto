import * as data from "./constants.js";
import {Ard} from "./Сard.js";
import * as utils from "./utils.js";

data.profileEditButton.addEventListener('click', function (){
    data.popupTitle.value = data.title.textContent;
    data.popupMajor.value = data.major.textContent;
    utils.showPopup(data.popupEdit);
});

data.profileAddButton.addEventListener('click', function (){
    utils.showPopup(data.popupNewCard);
});

data.submitFormProfile.addEventListener('submit', utils.saveFormProfile);

data.submitFormCard.addEventListener('submit', utils.saveFormCard);

data.buttonCloseProfile.addEventListener('click', function (){
    utils.closePopup(data.popupEdit);
})

data.buttonCloseCard.addEventListener('click', function (){
    utils.closePopup(data.popupNewCard);
})

data.buttonCloseImg.addEventListener('click', function (){
    utils.closePopup(data.popupImage);
})

const renderElements = () => {
    data.gallery.innerHTML = '';
    data.initialCards.forEach((item) => {
        const card = new Ard(item, '.template__card');
        const cardElement = card.cardGenerate();
        data.gallery.append(cardElement);
    });
};

renderElements();