// Server setup
const express = require('express')
const app = express()
const api = require('./server/routes/api')
const dataBaseManager = require('./server/services/dataBaseamanger')

dataBaseManager.connect()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use('/', api)

const port = 4800
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})