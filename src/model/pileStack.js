import Card from "./card";

class PileStack {
  constructor(faceUpCards, faceDownCards) {
    this.faceUpCards = faceUpCards;
    this.faceDownCards = faceDownCards;
  }

  getFaceUpCards() {
    return this.faceUpCards;
  }

  getFaceDownCards() {
    return this.faceDownCards;
  }

  addFaceUpCards(cards) {
    cards.forEach(card => {
      this.faceUpCards.push(card);
    });
  }

  removeFaceUpCards(numberOfCards) {
    return this.faceUpCards.splice(-numberOfCards);
  }

  addFaceUpCard() {
    if(this.faceDownCards.length === 0){
      this.faceDownCards.push(Card.getEmptyCard());
      return;
    }
    this.faceUpCards.push(this.faceDownCards.pop());
  }
}

export default PileStack;