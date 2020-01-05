import React, { Component } from "react";

export default class CreateCountry extends Component {
    constructor() {
        super();
        this.state = {
            createCountryFromInput: ""
        };
    }
    render() {
        return (
            <div className="create">

                <button>search for {this.state.createCountryFromInput}</button>
                <input></input>

            </div >


        )




    }


}
