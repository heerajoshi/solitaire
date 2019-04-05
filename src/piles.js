import lodash from "lodash";

import "./app.css";

class Piles {
  constructor(cards){
    this.cards = cards;
  }

  shuffleCards(){
    return (this.card =lodash.shuffle(this.cards))
  }

  createInitialPile(){
    const allpile ={};
    this.shuffleCards();
    for(let count = 1;count<8;count++){
      allpile[count]=this.cards.splice(0,count);
    }
    return allpile;
  }

  getPiles(){
    return this.Piles;
  }

  isDraggable(draggedCard, inPlaceCard) {
    return (
      draggedCard.number === inPlaceCard.number - 1 &&
      draggedCard.color !== inPlaceCard.color
    );
  }


}

export default Piles;