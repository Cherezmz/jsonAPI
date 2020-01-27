const mongoose = require("mongoose");
const mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/countries";
}

mongoose.connect(mongoURI, { useNewUrlParser: true });

module.exports = mongoose;
