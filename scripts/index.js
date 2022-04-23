const title = document.querySelector('.profile__title');
const major = document.querySelector('.profile__subtitle');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const Gallery = document.querySelector(".gallery__list");
const templateCard = document.querySelector(".template__card");
const templatePopupProfile = document.querySelector(".template__popup__profile");
const templatePopupCard = document.querySelector(".template__popup__card");
const templatePopupCardImg = document.querySelector(".template__popup__card-img");
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

    const getElementTemplate = templatePopupProfile.content.cloneNode(true);
    const name = document.querySelector('.profile__title');
    const major = document.querySelector('.profile__subtitle');
    const inputName = getElementTemplate.querySelector('.popup__form-text_type_name');
    const inputMajor = getElementTemplate.querySelector('.popup__form-text_type_major');
    const closeButton = getElementTemplate.querySelector('.popup__close-button');

    inputName.value = name.textContent;
    inputMajor.value = major.textContent;
    popup.append(getElementTemplate);
    popup.classList.add('popup_opened');
    closeButton.addEventListener('click', CloseModalWindow);
}

function ShowPopupAddCard() {

    const getElementTemplate = templatePopupCard.content.cloneNode(true);
    const closeButton = getElementTemplate.querySelector('.popup__close-button');

    popup.append(getElementTemplate);
    popup.classList.add('popup_opened');
    closeButton.addEventListener('click', CloseModalWindow);

}

function CloseModalWindow(){
    popup.innerHTML = '';
    popup.classList.remove('popup_opened');
}

function ClosePopupImg(){
    popup.innerHTML = '';
    popup.classList.remove('popup_opened_img');
}

function Save(evt){
    evt.preventDefault();
    const submitForm = document.querySelector('.popup__form__profile');

    if(submitForm != null){
        const inputName = popupContent.querySelector('.popup__form-text_type_name');
        const inputMajor = popupContent.querySelector('.popup__form-text_type_major');
        title.textContent = inputName.value;
        major.textContent = inputMajor.value;
    }else{
        const inputTitle = popupContent.querySelector('.popup__form-text_type_title');
        const inputImg = popupContent.querySelector('.popup__form-text_type_img');
        initialCards.unshift({name: inputTitle.value, link: inputImg.value});
        Gallery.innerHTML = '';
        render();
    }

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

function clickOnElement(evt){
    const element = evt.target;
    if(element.className === "gallery__like"){
        element.classList.add('gallery__like_type_is-active');
    }
    else if(element.className === "gallery__like gallery__like_type_is-active"){
        element.classList.remove('gallery__like_type_is-active');
    }
    else if(element.className === "gallery__del-button")
    {
        element.parentNode.remove();
    }
    else if(element.className === "gallery__img")
    {
        ShowPopupImg(element);
        console.log(element);
    }
}

function ShowPopupImg(element){
    const getElementTemplate = templatePopupCardImg.content.cloneNode(true);
    const popupCardImg = getElementTemplate.querySelector('.gallery__popup__card-img');
    const closeButton = getElementTemplate.querySelector('.popup__close-button');
    const titleImg = getElementTemplate.querySelector('.popup__title-img');

    popup.append(getElementTemplate);
    popup.classList.add('popup_opened_img');
    popupCardImg.setAttribute('src', element.getAttribute('src'));
    closeButton.addEventListener('click', ClosePopupImg);
    titleImg.textContent = element.parentNode.childNodes[5].textContent;

}


editButton.addEventListener('click', ShowPopupEditPorfile);
addButton.addEventListener('click', ShowPopupAddCard);
popup.addEventListener('submit', Save);
Gallery.addEventListener('click', clickOnElement);

render();