import React from "react";

class Card extends React.Component {
  render() {
    return this.createCard();
  }

  createCard() {
    return (
      <div
        draggable
        onDragStart={this.props.onDragStart}
        onDragOver={this.props.onDragOver}
        onDrop={this.props.onDrop}
        style={{ color: this.props.card.getColor() }}
        className={"card" + " " + this.props.className}
        id={this.props.id}
      >
        {this.props.card.getUnicode()}
      </div>
    );
  }
}

export default Card;
