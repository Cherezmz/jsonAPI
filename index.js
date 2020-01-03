const express = require("express");
const routes = require("./routs/countryroute")
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

//connect to mongodb
//name of db need to be checked
mongoose.connect("mongodb://localhost/countrydata");
mongoose.Promise = global.Promise;

//middleware
app.use(bodyParser.json());

//all the routes will be after /generalinfo
//mivvleware as well
app.use("/generalinfo", routes);

//middleware for error handling
app.use(function (err, req, res, next) {
    //console.log(err)
    res.status(422).send({ error: err.message })
})


app.listen(process.env.port || 4000, function () {
    console.log("I'm listening")
})