const port = 3003

const bodyParser = require('body-parser')
const express = require('express') //servidor Web
const server = express() //cria uma instância do express e atribui à variável server
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server

