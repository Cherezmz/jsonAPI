const axios = require("axios");
const fs = require("fs");
axios.get(
    "https://restcountries.eu/rest/v2/all?fields=name;borders"
)
    .then(response => {
        console.log(response.data);
        let stringified = JSON.stringify(response.data);

        fs.writeFile("./borders.json", stringified, "utf8", err => {
            if (err) {
                console.error("Unsuccesfully borders" + err);
            }
        });
    });

