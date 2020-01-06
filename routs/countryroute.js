const express = require("express");
const Country = require("../models/Country.js")

const router = express.Router();


//get the list of countries from DB
// router.get("/country", function (req, res, next) {
//     Country.find({}).then(function (countries) {
//         res.json(countries);
//         console.log(countries)
//     });
// });

router.get("/country", (req, res) => {
    Country.find().then(allUsers => {
        res.json(allUsers);
    });
});

router.get("/country/:name", (req, res) => {
    const userCountry = req.params.name;
    Country.findOne({ name: userCountry }).then(country => {
        res.json(country);
        //res.json(country.flag);
    });
});

router.get("/country/cap/:capital", (req, res) => {
    const userCountry = req.params.capital;
    Country.findOne({ capital: userCountry }).then(country => {
        res.json(country.name);
    });
});


//add a new country
router.post("/create", function (req, res, next) {
    //create an instance of db where 
    //we will save new data

    // var country = new country(req.body);
    // //we say to save new data
    // country.save();
    //use create method
    Country.create(req.body)
        .then(function (country) {
            res.json(country);
        }).catch(next);
});

//update a country in the db
router.put("/country/:id", function (req, res, next) {
    res.send({ type: "PUT" })
});

//delete from db
router.delete("/country/:id", function (req, res, next) {
    console.log(req.params.id)
    res.send({ type: "DELETE" })
});

module.exports = router;