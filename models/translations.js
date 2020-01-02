const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const TranslationsSchema = new Schema({
    translations: Array

});

module.exports = mongoose.model("Translations", TranslationsSchema) 