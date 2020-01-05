import React, { Component } from "react";
import style from "./searchcapital.css"

export default class SearchCapital extends Component {
    constructor() {
        super();
        this.state = {
            capitalInInput: ""
        };
    }
    render() {
        return (
            <div >

                <button className="capitalButton">which capital is{this.state.capitalInInput}</button>
                <input className="capitalInput"></input>

            </div >


        )




    }


}
