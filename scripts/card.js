class Card{
    constructor(data, cardSelector) {
        this._title = data.title;
        this._image = data.image;
        this._cardSelector = cardSelector;
    }

    _getTemplate(){
        const cardElement = document.querySelector(this._cardSelector)
            .content
            .querySelector('.gallery__item')
            .cloneNode(true);
        const titleEl = cardElement.querySelector(".gallery__item-title");
        const imgEl = cardElement.querySelector(".gallery__img");
        const likeEl = cardElement.querySelector(".gallery__like");
        const delEl = cardElement.querySelector(".gallery__del-button");

        titleEl.textContent = this._title;
        imgEl.src = this._image;
        imgEl.alt = this._title;

        imgEl.addEventListener('click',function (){
            img.src = this._image;
            imgTitle.textContent = this._title;
            img.alt = this._title;
            this._handleOpenPopup();
        })

        likeEl.addEventListener('click', function (){
            likeEl.classList.toggle('gallery__like_type_is-active');
        })

        delEl.addEventListener('click', function (){
            delEl.closest('.gallery__item').remove();
        })

        return cardElement;
    }

    _handleOpenPopup(){
        const popupImage = document.querySelector('.popup_type_image');
        popupImage.classList.add('popup_opened');
        document.addEventListener('keydown', handleEscUp);
        popupNewCard.addEventListener('click', closePopupOverlay);
    }
}