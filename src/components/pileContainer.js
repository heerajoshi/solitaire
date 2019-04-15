
import React from "react";

class PileContainer extends React.Component {
  render() {
    return <div className="pile-container">{this.props.allPiles}</div>;
  }
}

export default PileContainer;