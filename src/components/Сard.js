export default class Card {

    constructor({
                    data,
                    handleCardClick,
                    handleAddLikeClick,
                    handleDelLikeClick,
                    handleDeleteIconClick,
                    userId
                }, cardSelector){
        this._title = data.name;
        this._image = data.link;
        this._likes = data.likes.length;
        this._data = data;
        this._liked = false;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleAddLikeClick = handleAddLikeClick;
        this._handleDelLikeClick = handleDelLikeClick;
        this._handleDeleteIconClick = handleDeleteIconClick;
        this._userId = userId;
    }

    _getTemplate(){
        const templateCard = document.querySelector(this._cardSelector);
        const getElementTemplate = templateCard.content.cloneNode(true);
        const titleEl = getElementTemplate.querySelector(".gallery__item-title");
        const imgEl = getElementTemplate.querySelector(".gallery__img");
        const likes = getElementTemplate.querySelector(".gallery__like-count");
        const delButton = getElementTemplate.querySelector('.gallery__del-button');

        titleEl.textContent = this._title;
        imgEl.src = this._image;
        imgEl.alt = this._title;
        likes.textContent = this._likes;

        if (this._data.owner._id === this._userId){
            delButton.classList.add('gallery__del-button-active');
        }

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
            this._handleDeleteIconClick(this._data._id);
        });
        like.addEventListener('click', ()=>{
            like.classList.toggle('gallery__like_type_is-active');
            this.isLiked();
        });
    }

    isLiked(){
        if(this._liked === false){
            this._liked = true;
            this._handleAddLikeClick(this._data._id);
            this._likes = this._likes + 1;
        }else{
            this._liked = false;
            this._handleDelLikeClick(this._data._id);
            this._likes = this._likes - 1;
        }
    }

    cardGenerate(){
        this._element = this._getTemplate();
        this._setEventListeners();
        return this._element;
    }

}


