const axios = require("axios");
const fs = require("fs");
axios
    .get(
        "https://restcountries.eu/rest/v2/all"
    )
    .then(response => {
        console.log(response.data);
        let stringified = JSON.stringify(response.data);

        fs.writeFile(__dirname + "/countries.json", stringified, "utf8", err => {
            if (err) {
                console.error("Unsuccesfully" + err);
            } else {
                console.log("Successful request!");
            }
        });
    });