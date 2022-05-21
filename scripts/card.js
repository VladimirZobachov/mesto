const initialCards = [
    {

        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const gallery = document.querySelector(".gallery__list");

class Card{

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

    _handleOpenPopup(){

        const popupWindow = document.querySelector('.popup_type_image');
        const popupImg = popupWindow.querySelector('.popup__gallery-img');
        const popupTitle = popupWindow.querySelector('.popup__title-img');
        const closeButton = popupWindow.querySelector('.popup__close-button_type_img');

        popupImg.src = this._image;
        popupImg.alt = this._title;
        popupTitle.textContent = this._title;

        popupWindow.classList.add('popup_opened');
        closeButton.addEventListener('click', ()=>{this._handleClosePopup();})

        //document.addEventListener("keydown", handleEscUp);
        // popupWindow.addEventListener('click', closePopupOverlay);
    }

    _handleClosePopup(){
        const popupWindow = document.querySelector('.popup_type_image');
        popupWindow.classList.remove('popup_opened');
        //document.removeEventListener('keydown', handleEscUp);
        //popupWindow.removeEventListener('click', closePopupOverlay);
    }

    _setEventListeners(){
        const like = this._element.querySelector('.gallery__like');
        const img = this._element.querySelector('.gallery__img');
        const delButton = this._element.querySelector('.gallery__del-button');

        img.addEventListener('click', ()=>{
            this._handleOpenPopup();
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

const renderElements = () => {
    gallery.innerHTML = '';
    initialCards.forEach((item) => {
        const card = new Card(item, '.template__card');
        const cardElement = card.cardGenerate();
        gallery.append(cardElement);
    });
};

renderElements();
