const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const name = document.querySelector('.profile__title');
const major = document.querySelector('.profile__subtitle');
const inputName = document.querySelector('#name');
const inputMajor = document.querySelector('#major');
const saveButton = document.querySelector('.popup__button');
const like = document.querySelector('.gallery__like');

inputName.value = name.textContent;
inputMajor.value = major.textContent;

function ShowModalWindow(){
    popup.classList.add('popup__is-active');
}
function CloseModalWindow(){
    popup.classList.remove('popup__is-active');
}
function Save(){
    name.textContent = inputName.value;
    major.textContent = inputMajor.value;
    CloseModalWindow();
    console.log(editButton);
}
function Like(){
    like.src = './images/active_like.png';
}
editButton.addEventListener('click', ShowModalWindow);
closeButton.addEventListener('click', CloseModalWindow);
saveButton.addEventListener('click', Save);
like.addEventListener('click', Like);

