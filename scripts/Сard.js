import {popupImage} from "./constants.js";
import {showPopup} from "./utils.js";

export class Card {

    constructor(data, cardSelector){
        this._title = data.name;
        this._image = data.link;
        this._cardSelector = cardSelector;
    }

    _getTemplate(){
        const templateCard = document.querySelector(this._cardSelector);
        const getElementTemplate = templateCard.content.cloneNode(true);
        const titleEl = getElementTemplate.querySelector(".gallery__item-title");
        const imgEl = getElementTemplate.querySelector(".gallery__img");

        titleEl.textContent = this._title;
        imgEl.src = this._image;
        imgEl.alt = this._title;

        return getElementTemplate;
    }

    _handlePreviewPicture(){
        const popupImg = popupImage.querySelector('.popup__gallery-img');
        const popupTitle = popupImage.querySelector('.popup__title-img');

        popupImg.src = this._image;
        popupImg.alt = this._title;
        popupTitle.textContent = this._title;

        showPopup(popupImage);
    }

    _setEventListeners(){
        const like = this._element.querySelector('.gallery__like');
        const img = this._element.querySelector('.gallery__img');
        const delButton = this._element.querySelector('.gallery__del-button');

        img.addEventListener('click', ()=>{
            this._handlePreviewPicture();
        });
        delButton.addEventListener('click', ()=>{
            delButton.closest('.gallery__item').remove();
        });
        like.addEventListener('click', ()=>{
            like.classList.toggle('gallery__like_type_is-active');
        });
    }

    cardGenerate(){
        this._element = this._getTemplate();
        this._setEventListeners();
        return this._element;
    }

}


