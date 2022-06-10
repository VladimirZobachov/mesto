export default class Section{
    constructor({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(item){
        const card = this._renderer(item);
        this._container.prepend(card);
    }

    renderItems(){
        this._items.forEach((item)=>{
            const card = this.addItem(item);
        })
    }

}