    
import React from "react";
import { FACE_DOWN_UNICODE } from "../constant";

class FaceDownCard extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick} className={this.props.className}>
        {FACE_DOWN_UNICODE}
      </div>
    );
  }
}

export default FaceDownCard;