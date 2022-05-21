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