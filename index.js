const express = require("express");
const routes = require("./routs/countryroute")
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

//all the routes will be after /generalinfo
app.use("/generalinfo", routes);

app.listen(process.env.port || 4000, function () {
    console.log("I'm listening")
})