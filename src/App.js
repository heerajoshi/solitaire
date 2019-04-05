import React from "react";
import "./app.css";
import Foundations from "./ foundations.js";
import Deck from './Deck';

const CLOSE_CARD_UNICODE = "\u{1F0A0}";

class App extends React.Component {

 allowDrop(event) {
    event.prevententDefault();
  }
  
 drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
 drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }

  render() {
    return (
      <div className="upperRow">
        <div className="deck" />
        <Foundations id='suit1' onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}/>
        <Foundations id='suit2' onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}/>
        <Foundations id='suit3' onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}/>
        <Foundations id='suit4' onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}/>
      </div>
    );
  }
}

export default App;
