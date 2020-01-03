const express = require("express");

const app = express();

app.get("/", function () { console.log("GET") })

app.listen(process.env.port || 4000, function () {
    console.log("I'm listening")
})