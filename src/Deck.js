import lodash from "lodash";
import "./app.css";
import Piles from "./piles";
import cards from './cards';


class Deck {
  constructor(){
    this.cards = cards;
    this.pile = new Piles(this.cards)
    this.piles = this.pile.getPiles()
  }

  shuffleCards(){
    return (this.card =lodash.shuffle(this.cards))
  }

  drawACard() {
    const card = lodash.last(this.cards);
    this.cards.pop();
    return card;
  }

  refillDeck(){
    return this.cards;
  }
  
  isDraggable(draggedCard, inPlaceCard) {
    return (
      draggedCard.number === inPlaceCard.number - 1 &&
      draggedCard.color !== inPlaceCard.color
    );
  }

}

export default Deck;
