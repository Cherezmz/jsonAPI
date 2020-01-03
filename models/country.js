const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const currenciesSchema = new Schema({
    code: String,
    name: String,
    symbol: String
});

const NameSchema = new Schema({
    name: String,
    topLevelDomain: Array,
    callingCodes: Array,
    capital: String,
    region: String,
    subregion: String,
    population: Number,
    area: Number,
    timezones: Array,
    borders: Array,
    currencies: {
        code: String,
        name: String,
        symbol: String
    },
    translations: {
        de: String,
        es: String,
        fr: String,
        ja: String,
        it: String,
        br: String,
        pt: String
    },
    flag: String,
});

module.exports = mongoose.model("Name", NameSchema) 