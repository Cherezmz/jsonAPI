import React, { Component } from "react";
import style from "./createcountry.css"


export default class CreateCountry extends Component {
    constructor() {
        super();
        this.state = {
            createCountryFromInput: ""
        };
    }
    render() {
        return (
            <div>

                <button className="createButton">create new country {this.state.createCountryFromInput}</button>
                <input className="createInput"></input>

            </div >


        )




    }


}
