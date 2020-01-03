//seed is used to tell coputer to create db
//according to schema. That is why 
// 1-s line is file with schema model
//after seeding each entry has its own DB ID


const Country = require('../models/country')
const data = require('../db/countries.json')

const countryData = data.map(item => {
    const country = {}
    country.name = item.name,
        country.topLevelDomain = item.topLevelDomain,
        country.callingCodes = item.callingCodes,
        country.capital = item.capital,
        country.region = item.region,
        country.subregion = item.subregion,
        country.population = item.population,
        country.area = item.area,
        country.timezones = item.timezones,
        country.borders = item.borders,
        country.currencies = item.currencies,
        country.languages = item.languages,
        country.translations = item.translations,
        country.flag = item.flag

    return country
})
//console.log(countryData)

Country.remove({})
    .then(() => {
        Country.create(countryData)
            .then(countries => {
                console.log(countries)
                process.exit()
            })
            .catch(err => {
                console.log(err)
            })
    })


