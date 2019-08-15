import React, { Component } from 'react'

export default class Results extends Component {
    render() {
        return (
            <div className={`box ${this.props.className}`} style={{margin: 5}}>
                {this.props.matches.map((match) => {
                    return (<div>{match.category}</div>)
                })}
            </div>
        )
    }
}
