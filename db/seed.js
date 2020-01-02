//seed is used to tell coputer to create db
//according to schema. That is why 
// 1-s line is file with schema model
//after seeding each entry has its own DB ID


const Country = require('../models/country')
const data = require('../db/countries.json')

const countryData = data.map(item => {
    const country = {}
    country.name = item.name
    country.borders = item.borders
    country.translations = item.translations
    return country
})
//console.log(countryData)

Country.deleteMany({})
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


