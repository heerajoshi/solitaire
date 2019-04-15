import React from "react";

class FoundationView extends React.Component {
  render() {
    return this.createFoundationView();
  }

  createFoundationView() {
    const view = Object.keys(this.props.foundations).map(index => {
      return (
        <div
          id={"foundation_" + index}
          className="card stable-card"
          onDragOver={this.props.onDragOver}
          onDrop={this.props.onDrop}
          style={{"color":this.props.foundations[index].getTopCard().getColor()}}
        >
          {this.props.foundations[index].getTopCard().getUnicode()}
        </div>
      );
    });
    return <div className="foundation">{view}</div>;
  }

}

export default FoundationView;