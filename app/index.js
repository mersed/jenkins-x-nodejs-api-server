// Setting up configuration directory
process.env['NODE_CONFIG_DIR'] = __dirname + "/config";

// importing legacy modules
const express = require('express')
const bodyParser = require('body-parser')

// importing custom modiules
const authorizationMiddleware = require('./middlewares/authorization')
const getRandomUser = require('./users-generated')

// defining globals
const app = express()
const port = 3000

app.use(
    bodyParser.json({
        limit: '50mb',
        verify: (req, res, buf, encoding) => {
            if(buf && buf.length) {
                req.rawBody = buf.toString(encoding || 'utf8')
            }
        }
    })
)
app.use(authorizationMiddleware)

app.post('/get-user', (req, res) => {
    const user = getRandomUser();
    res.send({success: true, user: {...user}})
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`)
})