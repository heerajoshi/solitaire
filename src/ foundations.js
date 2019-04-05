import React, { Component } from "react";

import "./app.css";

class Foundations extends Component {
  constructor(props){
    super(props)
    this.id = props.id;
    // this.className = props.className;
    this.onDrop = props.onDrop;
    this.onDrapOver = props.onDrapOver;
    this.unicode = props.unicode;

  }
  render() {
    // return (
    //   <div className="foundations">
    //     <div className="foundation" />
    //     <div className="foundation" />
    //     <div className="foundation" />
    //     <div className="foundation" />
    //   </div>
    // );
    return (
      <div
        id={this.props.id}
        className='foundation'
        onDrop={this.props.onDrop}
        onDragOver={this.props.onDragOver}
      >
      {this.props.unicode}
      </div>
    );
  }
}

export default Foundations;
