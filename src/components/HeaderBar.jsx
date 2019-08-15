import React, { Component } from 'react'
import SearchBar from '../components/SearchBar';

export default class HeaderBar extends Component {
    render() {
        return (
            <div className="container">
                <div className="level">
                    <div className="level-left">
                        <span style={{fontWeight: "bold"}}>Prezio</span>
                    </div>
                    <div className="level-right is-extended">
                        <SearchBar value={this.props.criteria} />
                    </div>
                </div>
            </div>
        )
    }
}