import React, { Component } from 'react'
import CategoryDir from '../components/CategoryDir';
import Results from '../components/Results';
import HeaderBar from '../components/HeaderBar';

export default class SearchResults extends Component {
    state = {
        products: []
    }

    constructor(props) {
        super(props)
        const { products } = require("../data/products.json")
        this.state.products = products
    }

    render() {
        return (
            <section className="hero is-info is-medium is-bold is-fullheight">
                <div className="intro column is-8 is-offset-2">
                    <HeaderBar />
                    <div>
                        <CategoryDir />
                        <Results matches={this.state.products} />
                    </div>
                </div>
            </section>
        )
    }
}