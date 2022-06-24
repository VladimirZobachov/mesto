export default class Card {

    constructor({
                    data,
                    handleCardClick,
                    handleLikeClick,
                    handleDeleteIconClick

                }, cardSelector){
        this._title = data.name;
        this._image = data.link;
        this._likes = data.likes.length;
        this._data = data;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteIconClick = handleDeleteIconClick;
    }

    _getTemplate(){
        const templateCard = document.querySelector(this._cardSelector);
        const getElementTemplate = templateCard.content.cloneNode(true);
        const titleEl = getElementTemplate.querySelector(".gallery__item-title");
        const imgEl = getElementTemplate.querySelector(".gallery__img");
        const likes = getElementTemplate.querySelector(".gallery__like-count");

        titleEl.textContent = this._title;
        imgEl.src = this._image;
        imgEl.alt = this._title;
        likes.textContent = this._likes;

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
            this._handleDeleteIconClick(this._data.id);
        });
        like.addEventListener('click', ()=>{
            like.classList.toggle('gallery__like_type_is-active');
            console.log(this._data._id);
            this._handleLikeClick(this._data._id);
        });
    }

    cardGenerate(){
        this._element = this._getTemplate();
        this._setEventListeners();
        return this._element;
    }

}


