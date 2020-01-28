const mongoose = require("mongoose");
let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  //mongoURI = process.env.DB_URL;
  mongoURI =
    "mongodb+srv://igorslabykh:Pw654321@cluster0-i964r.mongodb.net/test?retryWrites=true&w=majority";
} else {
  // mongoURI = "mongodb://localhost/countries";
  mongoURI =
    "mongodb+srv://igorslabykh:Pw654321@cluster0-i964r.mongodb.net/test?retryWrites=true&w=majority";
}

console.log("mongoURI: " + mongoURI);

mongoose.connect(mongoURI, { useNewUrlParser: true });

module.exports = mongoose;
