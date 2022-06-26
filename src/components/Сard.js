export default class Card {

    constructor({
                    data,
                    handleCardClick,
                    handleAddLikeClick,
                    handleDelLikeClick,
                    handleDeleteIconClick,
                    userId
                }, cardSelector){
        this._id = data._id;
        this._title = data.name;
        this._image = data.link;
        this._likes = data.likes.length;
        this._data = data;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleAddLikeClick = handleAddLikeClick;
        this._handleDelLikeClick = handleDelLikeClick;
        this._handleDeleteIconClick = handleDeleteIconClick;
        this._userId = userId;
        this._templateCard = document.querySelector(this._cardSelector);
        this._getElementTemplate = this._templateCard.content.cloneNode(true);
        this._likesCount = this._getElementTemplate.querySelector(".gallery__like-count");
        this._delButton = this._getElementTemplate.querySelector('.gallery__del-button');


        if(data.likes.length > 0){
            data.likes.forEach((like)=>{
                if(like._id === userId){
                    this._liked = true;
                }else{
                    this._liked = false;
                }
            })
        }else{
            this._liked = false;
        }
    }

    _getTemplate(){

        const titleEl = this._getElementTemplate.querySelector(".gallery__item-title");
        const imgEl = this._getElementTemplate.querySelector(".gallery__img");
        const delButton = this._getElementTemplate.querySelector('.gallery__del-button');
        const like = this._getElementTemplate.querySelector('.gallery__like');

        titleEl.textContent = this._title;
        imgEl.src = this._image;
        imgEl.alt = this._title;
        this._likesCount.textContent = this._likes;

        if (this._data.owner._id === this._userId){
            delButton.classList.add('gallery__del-button-active');
        }

        if(this._liked === true){
            like.classList.add('gallery__like_type_is-active');
        }

        return this._getElementTemplate;
    }

    _setEventListeners(){

        const like = this._element.querySelector('.gallery__like');
        const img = this._element.querySelector('.gallery__img');

        img.addEventListener('click', ()=>{
            this._handleCardClick(this._data);
        });
        this._delButton.addEventListener('click', ()=>{
            this._handleDeleteIconClick(this);
        });
        like.addEventListener('click', ()=>{
            like.classList.toggle('gallery__like_type_is-active');
            this.isLiked();
        });
    }

    getId(){
        return this._id;
    }

    delCard(){
        this._delButton.closest('.gallery__item').remove();
    }

    isLiked(){

        if(this._liked === false){
            this._liked = true;
            this._handleAddLikeClick(this._data._id);
            this._likesCount.textContent = parseInt(this._likesCount.textContent) + 1;
        }else{
            this._liked = false;
            this._handleDelLikeClick(this._data._id);
            this._likesCount.textContent = parseInt(this._likesCount.textContent) - 1;
        }
    }

    cardGenerate(){
        this._element = this._getTemplate();
        this._setEventListeners();
        return this._element;
    }

}


