import React, { Component } from 'react'
import CategoryDir from '../components/CategoryDir';
import Results from '../components/Results';
import HeaderBar from '../components/HeaderBar';

export default class SearchResults extends Component {
    state = {
        productsSnapshot: require("../data/products.json").products,
        filteredProducts: []
    }

    filterProducts = (criteria, products) => products.filter((prod) => {
        return prod.info.some((i) => i.make.startsWith(criteria)) 
            || prod.category.startsWith(criteria);
    })

    render() {
        const { criteria } = this.props.criteria.params
        const products = this.filterProducts(criteria, this.state.productsSnapshot)
        return (
            <section className="hero is-info is-medium is-bold is-fullheight">
                <div className="intro column is-8 is-offset-2">
                    <HeaderBar criteria={criteria} />
                    <div className="columns" style={{margin: 10}}>
                        <CategoryDir className="column is-one-quarter" />
                        <Results className="column is-three-quarters" matches={products} />
                    </div>
                </div>
            </section>
        )
    }
}