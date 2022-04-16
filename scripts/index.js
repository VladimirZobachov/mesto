const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const Gallery = document.querySelector(".gallery__list");
const templateCard = document.querySelector(".template__card");
const templatePopup = document.querySelector(".template__popup");
const submitForm = document.querySelector('.popup__form');
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

function ShowPopupEditPorfile(){
    
    const name = document.querySelector('.profile__title');
    const major = document.querySelector('.profile__subtitle');
    const inputName = document.querySelector('.popup__form-text_type_name');
    const inputMajor = document.querySelector('.popup__form-text_type_major');

    inputName.value = name.textContent;
    inputMajor.value = major.textContent;
    popup.classList.add('popup_opened');

}

function ShowPopupAddCard() {

    const getElementTemplate = templatePopup.content.cloneNode(true);
    const title = getElementTemplate.querySelector(".gallery__item-title");
    const img = getElementTemplate.querySelector(".gallery__img");

    title.textContent = item.name;
    img.src = item.link;

    return getElementTemplate;

}

function CloseModalWindow(){
    popup.classList.remove('popup_opened');
}

function Save(evt){
    evt.preventDefault();
    name.textContent = inputName.value;
    major.textContent = inputMajor.value;
    CloseModalWindow();
}

function render(){
    const html = initialCards.map(getElement);
    Gallery.append(...html);
}

function getElement(item){
    const getElementTemplate = templateCard.content.cloneNode(true);
    const title = getElementTemplate.querySelector(".gallery__item-title");
    const img = getElementTemplate.querySelector(".gallery__img");
    title.textContent = item.name;
    img.src = item.link;
    return getElementTemplate;
}

editButton.addEventListener('click', ShowPopupEditPorfile);
addButton.addEventListener('click', ShowPopupAddCard);
closeButton.addEventListener('click', CloseModalWindow);
submitForm.addEventListener('submit', Save);

render();