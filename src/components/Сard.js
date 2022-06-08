export default class Card {

    constructor({data, handleCardClick}, cardSelector){
        this._title = data.name;
        this._image = data.link;
        this._data = data;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
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


    _setEventListeners(){
        const like = this._element.querySelector('.gallery__like');
        const img = this._element.querySelector('.gallery__img');
        const delButton = this._element.querySelector('.gallery__del-button');

        img.addEventListener('click', ()=>{
            this._handleCardClick(this._data);
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


