import React, { Component } from "react";

export default class SearchCountry extends Component {
    constructor() {
        super();
        this.state = {
            countryInInput: ""
        };
    }
    render() {
        return (
            <div className="search">

                <button>search for {this.state.countryInInput}</button>
                <input></input>

            </div >


        )




    }


}

