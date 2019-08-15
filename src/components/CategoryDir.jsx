import React, { Component } from 'react'

export default class CategoryDir extends Component {
    render() {
        return (
            <div className={`box ${this.props.className}`} style={{margin: 5}}>
                <h2>Categorías</h2>
            </div>
        )
    }
}
