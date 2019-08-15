import React, { Component } from "react";
import ProductPlaces from "./ProductPlaces";

class ProductList extends Component {
  state = {
    products: require("../data/products.json")
  };
  render() {
    const { products } = this.state.products;

    return (
      <section className="container">
        <div className="intro column is-8 is-offset-2">
          <h2 className="title">Productos por catergoria</h2>
          <br />
          <p className="subtitle">
            Donde puedes encontrar los principales productos de la canasta
            familiar
          </p>
        </div>

        <div className="sandbox">
          {products.map(p => (
            <div key={p.product_id} className="tile is-ancestor">
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">{p.category}</p>
                  <p className="subtitle">{p.info[0].make}</p>
                  <section className="info-tiles">
                    <div className="tile is-ancestor has-text-centered">
                      {p.info[0].places.map((place, index) => (
                        <ProductPlaces key={index} productP={place} />
                      ))}
                    </div>
                  </section>
                </article>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default ProductList;
