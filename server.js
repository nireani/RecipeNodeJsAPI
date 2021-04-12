const express = require('express')
const path = require('path')
const api = require('./server/routs/api')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/',api)



const port = 8080
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})

