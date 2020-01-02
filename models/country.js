const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const NameSchema = new Schema({
    name: String

});

module.exports = mongoose.model("Name", NameSchema) 