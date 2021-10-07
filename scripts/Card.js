class Card {

constructor(card, cardSelector) {

this._name = card.name;
this.link = card.link;

this._cardSelector = cardSelector;
    
}

_getTemplate() {

   return document
    .querySelector(this._cardSelector)
    .content.querySelector(".card")
    .cloneNode(true);

}


getView() {

}

}

console.log("card test")

export default Card;