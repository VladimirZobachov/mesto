const title = document.querySelector('.profile__title');
const major = document.querySelector('.profile__subtitle');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupEdit = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');
const gallery = document.querySelector(".gallery__list");
const templateCard = document.querySelector(".template__card");
const submitFormProfile = document.querySelector('.popup__form__profile');
const submitFormCard = document.querySelector('.popup__form__card');
const inputName = document.querySelector('.popup__form-text_type_name');
const inputMajor = document.querySelector('.popup__form-text_type_major');
const inputTitle = document.querySelector('.popup__form-text_type_title');
const inputImg = document.querySelector('.popup__form-text_type_img');
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

function showPopup(popupWindow) {
    const closeButton = popupWindow.querySelector('.popup__close-button');
    popupWindow.classList.add('popup_opened');
    closeButton.addEventListener('click',clicker);
}
function closePopup(popupWindow) {
    popupWindow.classList.remove('popup_opened');
}

function saveFormProfile(evt){
    evt.preventDefault();
    title.textContent = inputName.value;
    major.textContent = inputMajor.value;
    closePopup(submitFormProfile.parentNode.parentNode);
}

function saveFormCard(evt){
    evt.preventDefault();
    const getElementTemplate = templateCard.content.cloneNode(true);
    const titleEl = getElementTemplate.querySelector(".gallery__item-title");
    const imgEl = getElementTemplate.querySelector(".gallery__img");
    titleEl.textContent = inputTitle.value;
    imgEl.src = inputImg.value;
    imgEl.alt = inputTitle.value;
    gallery.prepend(getElementTemplate);
    closePopup(submitFormCard.parentNode.parentNode);
}

function render(){
    const html = initialCards.map(getElement);
    gallery.append(...html);
}

function getElement(item){
    const getElementTemplate = templateCard.content.cloneNode(true);
    const titleEl = getElementTemplate.querySelector(".gallery__item-title");
    const imgEl = getElementTemplate.querySelector(".gallery__img");
    titleEl.textContent = item.name;
    imgEl.src = item.link;
    imgEl.alt = titleEl.textContent;
    return getElementTemplate;
}

function clicker(evt){
    const element = evt.target;
    switch(element.className)
    {
        case "gallery__like":
            element.classList.add('gallery__like_type_is-active');
            break;
        case "gallery__like gallery__like_type_is-active":
            element.classList.remove('gallery__like_type_is-active');
            break;
        case "gallery__del-button":
            element.parentNode.remove();
            break;
        case "profile__edit-button":
            const popupTitle = popupEdit.querySelector('.popup__form-text_type_name');
            const popupMajor = popupEdit.querySelector('.popup__form-text_type_major');
            popupTitle.value = title.textContent;
            popupMajor.value = major.textContent;
            showPopup(popupEdit);
            break
        case "profile__add-button":
            showPopup(popupNewCard);
            break;
        case "gallery__img":
            const img = popupImage.querySelector('.gallery__popup__card-img');
            const imgTitle = popupImage.querySelector('.popup__title-img');
            img.src = element.src;
            imgTitle.textContent = element.nextSibling.nextSibling.firstChild.nextSibling.textContent;
            img.alt = imgTitle.textContent;
            showPopup(popupImage);
            break;
        case "popup__close-button":
            closePopup(element.parentNode.parentNode);
            break;
    }
}

profileEditButton.addEventListener('click', clicker);
profileAddButton.addEventListener('click', clicker);
submitFormProfile.addEventListener('submit', saveFormProfile);
submitFormCard.addEventListener('submit', saveFormCard);
gallery.addEventListener('click', clicker);

render();