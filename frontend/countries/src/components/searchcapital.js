import React, { Component } from "react";

export default class SearchCapital extends Component {
    constructor() {
        super();
        this.state = {
            capitalInInput: ""
        };
    }
    render() {
        return (
            <div className="capital">

                <button>which capital is{this.state.capitalInInput}</button>
                <input></input>

            </div >


        )




    }


}
