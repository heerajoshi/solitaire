import React from "react";

class Pile extends React.Component {
  render() {
    return (
      <div className="pile">
        {this.props.faceUpCards}
        {this.props.faceDownCards}
      </div>
    );
  }
}

export default Pile;