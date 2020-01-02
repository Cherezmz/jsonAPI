const Country = require('../db/data')
const data = require('../db/countries.json')

const countryData = data.map(item => {
    const country = {}
    country.name = item.name
    country.borders = item.borders
    country.translations = item.translations
    return country
})
console.log(countryData)

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