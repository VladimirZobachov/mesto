const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const name = document.querySelector('.profile__title');
const major = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('.popup__form-text_type_name');
const inputMajor = document.querySelector('.popup__form-text_type_major');
const submitForm = document.querySelector('.popup__form');

function ShowModalWindow(){
    inputName.value = name.textContent;
    inputMajor.value = major.textContent;
    popup.classList.add('popup_opened');
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

editButton.addEventListener('click', ShowModalWindow);
closeButton.addEventListener('click', CloseModalWindow);
submitForm.addEventListener('submit', Save);

