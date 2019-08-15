import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class SearchBar extends Component {
    state = {
        searchInput: this.props.value || "",
        goToSearch: false
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.setSearch()
    }

    onChange = (e) => { 
        this.setState({ searchInput: e.target.value });
    }

    setSearch = () => {
        this.setState({
            goToSearch: !!this.state.searchInput
        })
    }

    render() {
        if(this.state.goToSearch) {
            return <Redirect to={`/search/${this.state.searchInput}`} />
        }
        const isLarge = `${this.props.large ? "is-large" : ""}`
        return (
            <form onSubmit={this.onSubmit} style={{margin: 10}}>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <input className={`input ${isLarge} is-rounded`}
                            type="text" placeholder="e.g.: Arroz, Aceite..." style={{flex: 1}}
                            onChange={this.onChange} value={this.state.searchInput} onSubmit={this.onSubmit} />
                    </div>
                    <div className="control">
                        <a className={`button ${isLarge} is-rounded`} onClick={this.setSearch} 
                            href={"/search/" + this.state.searchInput}>Buscar</a>
                    </div>
                </div>
            </form>
        )
    }
}
