import React, { Component } from 'react'
import LogoHeader from "../components/LogoHeader"
import SearchBar from "../components/SearchBar"
import CurrencyPrice from '../components/CurrencyPrice';
import FuelPrice from '../components/FuelPrice';

export default class Home extends Component {
    search = (criteria) => {
        this.props.history.push("/search/" + criteria)
    }

    render() {
        return (
            <section className="hero is-info is-medium is-bold is-fullheight">
                <div className="intro column is-8 is-offset-2">
                    <LogoHeader />
                    <SearchBar search={this.search}/>
                    <div className="columns">
                        <CurrencyPrice className="column has-text-centered" />
                        <FuelPrice className="column has-text-centered" />
                    </div>
                </div>
            </section>
        )
    }
}