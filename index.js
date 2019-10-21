// importing legacy modules
const express = require('express')

// importing custom modiules
const getRandomUser = require('./users-generated')

const app = express()
const port = 3000

app.post('/get-user', (req, res) => {
    const user = getRandomUser();
    res.send({...user})
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`)
})