import React, { Component } from "react";

class ProductPlaces extends Component {
  state = {};
  render() {
    return (
      <article className="tile is-child box">
        <p className="title">{this.props.productP.prices}</p>
        <p className="subtitle">{this.props.productP.from}</p>
      </article>
    );
  }
}

export default ProductPlaces;
