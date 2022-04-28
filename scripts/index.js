const title = document.querySelector('.profile__title');
const major = document.querySelector('.profile__subtitle');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupEdit = document.querySelector('.popup_type_edit');
const popupImage = document.querySelector('.popup_type_image');
const img = popupImage.querySelector('.popup__gallery-img');
const imgTitle = popupImage.querySelector('.popup__title-img');
const gallery = document.querySelector(".gallery__list");
const templateCard = document.querySelector(".template__card");
const submitFormProfile = document.querySelector('.popup__form-profile');
const submitFormCard = document.querySelector('.popup__form-card');
const inputName = document.querySelector('.popup__form-text_type_name');
const inputMajor = document.querySelector('.popup__form-text_type_major');
const popupTitle = popupEdit.querySelector('.popup__form-text_type_name');
const popupMajor = popupEdit.querySelector('.popup__form-text_type_major');
const inputTitle = document.querySelector('.popup__form-text_type_title');
const inputImg = document.querySelector('.popup__form-text_type_img');
const buttonCloseProfile = document.querySelector('.popup__close-button_type_profile');
const buttonCloseCard = document.querySelector('.popup__close-button_type_card');
const buttonCloseImg = document.querySelector('.popup__close-button_type_img');
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
    popupWindow.classList.add('popup_opened');
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
    gallery.prepend(getElement({name:inputTitle.value, link:inputImg.value}));
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
    const likeEl = getElementTemplate.querySelector(".gallery__like");
    const delEl = getElementTemplate.querySelector(".gallery__del-button");
    titleEl.textContent = item.name;
    imgEl.src = item.link;
    imgEl.alt = titleEl.textContent;

    imgEl.addEventListener('click',function (){
        img.src = item.link;
        imgTitle.textContent = imgEl.nextSibling.nextSibling.firstChild.nextSibling.textContent;
        img.alt = imgTitle.textContent;
        showPopup(popupImage);
    })
    likeEl.addEventListener('click', function (){
        likeEl.classList.toggle('gallery__like_type_is-active');
    })
    delEl.addEventListener('click', function (){
        delEl.parentNode.remove();
    })
    return getElementTemplate;
}

profileEditButton.addEventListener('click', function (){
    popupTitle.value = title.textContent;
    popupMajor.value = major.textContent;
    showPopup(popupEdit);
});

profileAddButton.addEventListener('click', function (){
    showPopup(popupNewCard);
});

submitFormProfile.addEventListener('submit', saveFormProfile);

submitFormCard.addEventListener('submit', saveFormCard);

buttonCloseProfile.addEventListener('click', function (){
    closePopup(popupEdit);
})

buttonCloseCard.addEventListener('click', function (){
    closePopup(popupNewCard);
})

buttonCloseImg.addEventListener('click', function (){
    closePopup(popupImage);
})

render();