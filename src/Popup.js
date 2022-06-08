export default class Popup{
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open(){
        this._popup.classList.add('popup_opened');
    }

    close(){
        this._popup.classList.remove('popup_opened');
    }

    setEventListeners(){
        this._popup.addEventListener('click', (evt)=>{
            if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button'))
            {
                this.close();
            }
        });
        document.addEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) =>{
        if(evt.key === "Escape")
        {
            this.close();
        }
        document.removeEventListener('keydown', this._handleEscClose);
    }
}