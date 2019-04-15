import React from "react";
import CardView from "./card";
import FaceDownCard from "./FaceDownCard";
import Pile from "./pile";
import PileContainer from "./pileContainer";

class PileStackView extends React.Component {
  render() {
    return this.createStackPileView();
  }

  createStackPileView() {
    const allPiles = Object.keys(this.props.piles).map(index => {
      return this.createSinglePileView(this.props.piles[index], index);
    });

    return <PileContainer allPiles={allPiles} />;
  }

  createSinglePileView(pile, pileNumber) {
    return (
      <Pile
        faceUpCards={this.createFaceDownCardView(pile, pileNumber)}
        faceDownCards={this.createFaceUpCardView(pile, pileNumber)}
      />
    );
  }

  createFaceUpCardView(pile, pileNumber) {
    let count = pile.getFaceUpCards().length;
    const view = pile.getFaceUpCards().map((card, index) => {
      const id = this.getID(pileNumber, card, count, index);
      return this.createCardView(card, id);
    });
    return view;
  }

  createFaceDownCardView(pile, pileNumber) {
    const view = pile.getFaceDownCards().map((card, index) => {
      if (card.getRank() === 0) {
        const id = this.getID(pileNumber, card, 1, index);
        return this.createCardView(card, id);
      }
      return <FaceDownCard className="card" />;
    });
    return view;
  }

  createCardView(card, id) {
    return (
      <CardView
        card={card}
        className="faced-up-card"
        id={id}
        onDragStart={this.props.onDragStart}
        onDrop={this.props.onDrop}
        onDragOver={this.props.onDragOver}
      />
    );
  }

  getID(pileNumber, card, count, index) {
    return `pile_${pileNumber}_${count - index}_${card.suit}_${card.color}_${
      card.number
    }_${card.unicode}`;
  }
}

export default PileStackView;