const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

//API that returns a random word


//API that returns synonyms for a word

const port = 8080
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})
