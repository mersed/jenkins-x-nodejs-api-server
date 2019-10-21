// importing legacy modules
const express = require('express')

// importing custom modiules
const authorizationMiddleware = require('./middlewares/authorization')
const getRandomUser = require('./users-generated')

// defining globals
const app = express()
const port = 3000

app.use(authorizationMiddleware)

app.post('/get-user', (req, res) => {
    const user = getRandomUser();
    res.send({...user})
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`)
})