import React, { Component } from 'react'
import ResultItem from '../components/ResultItem';

export default class Results extends Component {
    render() {
        return (
            <div className={`${this.props.className}`} style={{margin: 5}}>
                {this.props.matches.map((match, index) => {
                    return (
                        <ResultItem result={match} key={index} />
                    )
                })}
            </div>
        )
    }
}
