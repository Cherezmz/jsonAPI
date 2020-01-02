const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const BordersSchema = new Schema({
    borders: Array

});

module.exports = mongoose.model("Borders", BordersSchema) 