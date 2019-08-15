import React, { Component } from 'react'

export default class CurrencyPrice extends Component {
    render() {
        return (
            <div className={`card ${this.props.className}`} style={{margin: 10}}>
                <div className="card-content">
                    <p className="title has-text-dark">Precios del dólar</p>
                    <div className="level">
                        <div className="level-item column">
                            <div className="title is-5 has-text-dark">RD$50.15</div>
                            <div>Compra</div>
                        </div>
                        <div className="level-item column">
                            <div className="title is-5 has-text-dark">RD$50.68</div>
                            <div>Venta</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
