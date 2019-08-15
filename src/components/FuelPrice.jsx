import React, { Component } from 'react'

export default class FuelPrice extends Component {
    render() {
        return (
            <div className={`card ${this.props.className}`} style={{margin: 10}}>
                <div className="card-content">
                    <p className="title has-text-dark">Precios de combustibles</p>
                    <div className="level">
                        <div className="level-item column">
                            <div className="title is-5 has-text-dark">RD$229.80</div>
                            <div>Gasolina Premium</div>
                        </div>
                        <div className="level-item column">
                            <div className="title is-5 has-text-dark">RD$215.00</div>
                            <div>Gasolina Regular</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
