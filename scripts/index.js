const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const name = document.querySelector('.profile__title');
const major = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('.popup__form-text_name');
const inputMajor = document.querySelector('.popup__form-text_major');
const submitForm = document.querySelector('.popup__form');

function ShowModalWindow(){
    inputName.value = name.textContent;
    inputMajor.value = major.textContent;
    popup.classList.add('popup__opened');
}
function CloseModalWindow(){
    popup.classList.remove('popup__opened');
}
function Save(){
    name.textContent = inputName.value;
    major.textContent = inputMajor.value;
    CloseModalWindow();
}

editButton.addEventListener('click', ShowModalWindow);
closeButton.addEventListener('click', CloseModalWindow);
submitForm.addEventListener('click', Save);
like.addEventListener('click', Like);

