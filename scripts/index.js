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
const inputName = document.querySelector('.popup__input_type_name');
const inputMajor = document.querySelector('.popup__input_type_major');
const popupTitle = popupEdit.querySelector('.popup__input_type_name');
const popupMajor = popupEdit.querySelector('.popup__input_type_major');
const inputTitle = document.querySelector('.popup__input_type_title');
const inputImg = document.querySelector('.popup__input_type_img');
const buttonCloseProfile = document.querySelector('.popup__close-button_type_profile');
const buttonCloseCard = document.querySelector('.popup__close-button_type_card');
const buttonCloseImg = document.querySelector('.popup__close-button_type_img');

const handleEscUp = (evt) => {
    if (evt.which === 27) {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    };
};

const closePopupOverlay = (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
        activePopup.removeEventListener('click', closePopupOverlay);
    }
}

function showPopup(popupWindow) {
    popupWindow.classList.add('popup_opened');
    document.addEventListener("keydown", handleEscUp);
    popupWindow.addEventListener('click', closePopupOverlay);
}

function closePopup(popupWindow) {
    document.removeEventListener('keydown', handleEscUp);
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
    const inputList = Array.from(submitFormCard.querySelectorAll('.popup__input'));
    const inactiveButtonClass = 'popup__button_disabled';
    gallery.prepend(getElement({name:inputTitle.value, link:inputImg.value}));
    submitFormCard.reset();
    toggleButtonState(inputList, submitFormCard.querySelector('.popup__button'),{inactiveButtonClass});
    closePopup(submitFormCard.parentNode.parentNode);
}

function renderInitialCards(){
    const cards = initialCards.map(getElement);
    gallery.append(...cards);
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
        imgTitle.textContent = item.name;
        img.alt = imgTitle.textContent;
        showPopup(popupImage);
    })
    likeEl.addEventListener('click', function (){
        likeEl.classList.toggle('gallery__like_type_is-active');
    })
    delEl.addEventListener('click', function (){
        delEl.closest('.gallery__item').remove();
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

renderInitialCards();