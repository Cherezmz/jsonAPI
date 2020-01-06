import React, { Component } from "react";
import style from "./createcountry.css"
import axios from "axios";

export default class CreateCountry extends Component {
    constructor(props) {
        super(props)

        this.onChangeCountryName = this.onChangeCountryName.bind(this);
        this.onChangeCountryPopulation = this.onChangeCountryPopulation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            population: ''
        }
    }

    onChangeCountryName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeCountryPopulation(e) {
        this.setState({ population: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userCountry = {
            name: this.state.name,
            population: this.state.population
        };

        axios.post("http://localhost:3000/generalinfo/create", userCountry)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            });

        this.setState({ name: '', population: '' })
    }
    render() {
        return (
            <div>
                <div>
                    <p className="pcreate"> Create your own country</p>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label className="createButton">add country name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeCountryName} className="createInput"></input>

                        <label className="createButton">add population</label>
                        <input type="text" value={this.state.population} onChange={this.onChangeCountryPopulation} className="createInput"></input>
                        <div>
                            <input type="submit" value="CreateCountry" className="createSubmit" />
                        </div>

                    </div>
                </form>
            </div >


        )




    }


}
