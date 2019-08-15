import React, { Component } from 'react'

export default class ResultItem extends Component {
    extractAverage = (info) => info.places.map((place) => place.prices).reduce((a, b) => a + b)

    render() {
        const { result } = this.props
        const productInfo = result.info[0]
        const averagePrice = this.extractAverage(productInfo)
        console.log(averagePrice)
        console.log(productInfo.places)
        return (
            <div className="box">
                <div className="level">
                    <div className="level-left">
                        <span style={{fontWeight: "bold"}}>{`${productInfo.make} `}</span>
                        <span className="is-small has-text-grey" style={{fontSize: "10pt"}}>({productInfo.unit})</span>
                    </div>
                    <div className="level-right">
                        <span>{`RD$${averagePrice}`}</span>
                    </div>
                </div>
            </div>
        )
    }
}
