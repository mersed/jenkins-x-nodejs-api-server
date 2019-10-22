// importing legacy modules
const config = require('config')

// defining globals
const apiKey = config.get('apiKey')

module.exports = (req, res, next) => {
    console.log('Middleware executed')
    console.log(apiKey)
    next()
}