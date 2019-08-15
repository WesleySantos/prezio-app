import React, { Component } from 'react'

export default class Results extends Component {
    render() {
        return (
            <div>
                {this.props.matches.map((match) => {
                    return (<div>{match.category}</div>)
                })}
            </div>
        )
    }
}
