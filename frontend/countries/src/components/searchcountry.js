import React, { Component } from "react";
import style from "./searchcountry.css";
import axios from "axios";

export default class SearchCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryInInput: ""
        }
        //this.handleButtonClick = this.handleButtonClick.bind(this)

    }




    // handleButtonClick = () => {
    //     axios.get("/generalinfo/country/")
    //         .then(response => {
    //             //console.log(response.data)
    //             //console.log(response)
    //             //next step is to set states
    //             this.setState({
    //                 //indefined
    //                 country: response.data.name
    //             });
    //             console.log(response.data);
    //         });

    // };

    componentDidMount() {
        axios.get("/generalinfo/country/")
            .then(res => {
                this.setState({ countryInInput: res.data })
                console.log(this.state.countryInInput)
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        return (
            <div >

                <button className="searchbutton" onClick={this.handleButtonClick} >search for country</button>
                <input className="searchinput"></input>

            </div >


        )




    }


}

