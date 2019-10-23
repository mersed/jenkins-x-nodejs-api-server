// importing legacy modules
const config = require('config')

// defining globals
const confApiKey = config.get('apiKey')

module.exports = (req, res, next) => {
	const reqApiKey = req.body.apiKey || ''
	if(confApiKey === reqApiKey) {
		return next()
	}

	res.status(401).json({success: false, error: 'API key invalid. Not authorized!'})
}