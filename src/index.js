import React from "react";
import ReactDOM from "react-dom";
import cardsData from "./data/cards";
import Card from "./model/card";
import Game from "./model/game";
import WastePile from "./model/wastePile";
import lodash from "lodash";
import PileStack from "./model/pileStack";
import GameView from "./components/app";
import Foundation from "./model/foundation";
import "./index.css";

const cards = lodash.shuffle(cardsData.map(card => new Card(card)));

const wastePileCards = cards.splice(0, 24);
const wastePile = new WastePile(wastePileCards);

const piles = {};

for (let index = 0; index < 7; index++) {
  const cardsOfPile = cards.splice(0, index + 1);
  const faceUpCards = [cardsOfPile.pop()];
  piles[index] = new PileStack(faceUpCards, cardsOfPile);
}

const foundations = {};

for (let index = 0; index < 4; index++) {
  foundations[index] = new Foundation();
}

const game = new Game(wastePile, piles, foundations);

ReactDOM.render(<GameView game={game} />, document.getElementById("root"));