
import React from "react";
import WastePileView from "./WastePileView";
import PileStackView from "./Deck";
import FoundationView from "./ foundations";
import Card from "../model/card";
import { PLACE_PILE, PLACE_FOUNDATION, PLACE_WASTE_PILE } from "../constant";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.game = props.game;
    this.state = { game: props.game };
  }

  render() {
    return (
      <div>
        <div className="header">
          <WastePileView
            wastePile={this.game.getWastePile()}
            onClick={this.drawCard.bind(this)}
            piles={this.game.getPiles()}
            onDragStart={this.drag.bind(this)}
            onDragOver={this.allowDrop.bind(this)}
            onDrop={this.drop.bind(this)}
          />
          <FoundationView
            foundations={this.game.getFoundations()}
            onDragOver={this.allowDrop.bind(this)}
            onDrop={this.drop.bind(this)}
          />
        </div>
        <PileStackView
          piles={this.game.getPiles()} 
          onDragStart={this.drag.bind(this)}
          onDragOver={this.allowDrop.bind(this)}
          onDrop={this.drop.bind(this)}
        />
      </div>
    );
  }

  drawCard() {
    this.game.drawCard();
    this.setState({ game: this.game });
  }

  allowDrop(event) {
    event.preventDefault();
  }

  drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  drop(event) {
    event.preventDefault();
    const source = event.dataTransfer.getData("text");
    const destination = event.target.id;

    const draggedCard = this.getCard(source);
    const inPlaceCard = this.getCard(destination);
    if(this.isDestinationWastePile(destination)) return;
    return this.isDestinationFoundation(destination)
      ? this.shiftCardToFoundation(source, destination, draggedCard)
      : this.shiftCardToPile(source, destination, draggedCard, inPlaceCard);
  }

  shiftCardToFoundation(source, destination, draggedCard) {
    const foundation = this.splitAndTake(destination, 1);
    if (this.isSourceWastePile(source)) {
      this.game.shiftCardToFoundation(draggedCard, foundation, PLACE_WASTE_PILE);
    }
    if (this.isSourcePile(source)) {
      const pileNum = +this.splitAndTake(source, 1);
      this.game.shiftCardToFoundation(draggedCard, foundation, PLACE_PILE, pileNum);
    }
    this.setState({ game: this.game });
  }

  shiftCardToPile(source, destination, draggedCard, inPlaceCard) {
    if (!this.game.isDraggableCard(draggedCard, inPlaceCard)) return;
    if (this.isSourceWastePile(source)) {
      const pileNumber = +this.splitAndTake(destination, 1);
      this.game.shiftCardFromWastePileToPile(pileNumber);
    }
    if (this.isSourcePile(source)) {
      const numOfCards = +this.splitAndTake(source, 2);
      const sourcePile = +this.splitAndTake(source, 1);
      const destinationPile = +this.splitAndTake(destination, 1);
      this.game.shiftCardFromPileToPile(numOfCards, sourcePile, destinationPile);
    }
    this.setState({ game: this.game });
  }

  isSourceWastePile(source) {
    return this.getPlace(source) === PLACE_WASTE_PILE;
  }

  isSourcePile(source) {
    return this.getPlace(source) === PLACE_PILE;
  }

  isDestinationFoundation(destination) {
    return this.getPlace(destination) === PLACE_FOUNDATION;
  }

  isDestinationPile(destination) {
    return this.isSourcePile(destination);
  }

  isDestinationWastePile(destination){
    return this.getPlace(destination) === PLACE_WASTE_PILE;  
  }

  getPlace(id) {
    return id.split("_")[0];
  }

  splitAndTake(data, count) {
    return data.split("_")[count];
  }

  getCard(id) {
    const suit = id.split("_")[3];
    const color = id.split("_")[4];
    const number = +id.split("_")[5];
    const unicode = id.split("_")[6];

    return new Card({ suit, color, number, unicode });
  }
}

export default Game;