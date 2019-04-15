import Card from "./card";

class Foundation {
  constructor() {
    this.cards = [];
  }

  addCard(card) {
    this.cards.push(card);
  }

  getCards() {
    return this.cards;
  }

  getTopCard() {
    if (this.cards.length === 0) {
      return new Card({
        suit: "none",
        number: "0",
        color: "black",
        unicode: "\u{1F0A0}"
      });
    }
    
    return this.cards[this.cards.length - 1];
  }
}

export default Foundation;
