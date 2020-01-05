import React, { Component } from "react";
import style from "./searchcountry.css"

export default class SearchCountry extends Component {
    constructor() {
        super();
        this.state = {
            countryInInput: ""
        };
    }
    render() {
        return (
            <div >

                <button className="searchbutton">search for {this.state.countryInInput}</button>
                <input className="searchinput"></input>

            </div >


        )




    }


}

