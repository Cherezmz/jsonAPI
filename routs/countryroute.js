const express = require("express");

const router = express.Router();


//get the list of countries from DB
router.get("/country", function (req, res) {
    res.send({ type: "GET" })
});

//add a new country
router.post("/country", function (req, res) {
    console.log(req.body);
    res.send({
        type: "POST",
        flag: req.body.flag
    })
});

//update a country in the db
router.put("/country/:id", function (req, res) {
    res.send({ type: "PUT" })
});

//delete from db
router.delete("/country/:id", function (req, res) {
    res.send({ type: "DELETE" })
});

module.exports = router;