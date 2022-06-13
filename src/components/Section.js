export default class Section{
    constructor({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
        this._cards = document.createDocumentFragment();
    }

    addItem(element){
        this._container.prepend(element);
    }

    renderItems(){
        this._items.forEach((item)=>{
            const card = this._renderer(item);
            this._cards.prepend(card);
        })
        return this._cards;
    }

}