import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="field">
                <div className="control">
                    <input className="input is-large is-rounded" type="text" placeholder="Buscar" />
                </div>
            </div>
        )
    }
}
