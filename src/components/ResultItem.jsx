import React, { Component } from 'react'

export default class ResultItem extends Component {
    extractAverage = (info) => {
        const places = info.places
        const average = places.map((place) => place.prices).reduce((a, b) => a + b) / places.length
        return average.toFixed(2)
    }

    render() {
        const { result } = this.props
        const productInfo = result.info[0]
        const averagePrice = this.extractAverage(productInfo)
        
        return (
            <div className="box">
                <div className="level">
                    <div className="level-left">
                        <span style={{fontWeight: "bold"}}>{`${productInfo.make}`}&nbsp;</span>
                        <span className="is-small has-text-grey" style={{fontSize: "10pt"}}>({productInfo.unit})</span>
                    </div>
                    <div className="level-right">
                        <span style={{fontWeight: "bold"}}>Promedio:&nbsp;</span> <span style={{fontWeight: "bold"}}>{`RD$${averagePrice}`}</span>
                    </div>
                </div>
                <hr/>
                <table className="table is-fullwidth">
                    <tbody>
                        {productInfo.places.map((place, index) => {
                            return (<tr key={index}>
                                <td>{place.from}</td>
                                <td style={{textAlign: "right"}}>{`RD$${place.prices.toFixed(2)}`}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
