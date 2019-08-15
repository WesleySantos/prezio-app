import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class SearchBar extends Component {
    state = {
        searchInput: "",
        goToSearch: false
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.goToSearch = this.state.searchInput !== ""
    }

    onChange = (e) => this.setState({ searchInput: e.target.value });

    render() {
        if(this.state.goToSearch) {
            return <Redirect to={`/search/${this.state.searchInput}`} />
        }
        return (
            <form onSubmit={this.onSubmit} style={{margin: 10}}>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input className="input is-large is-rounded" 
                            type="text" placeholder="e.g.: Arroz, Aceite..." style={{flex: 1}}
                            onChange={this.onChange} />
                    </div>
                    <div class="control">
                        <a class="button is-large is-rounded" 
                            href={"/search/" + this.state.searchInput}>Buscar</a>
                    </div>
                </div>
            </form>
        )
    }
}
