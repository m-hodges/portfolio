const express = require('express')
const path = require('path')

const router = require('./routes')

const server = express()

server.use(express.static(__dirname))
server.use(express.static(path.join(__dirname, 'build')))
server.use((req, res) => {
    if (!req.secure) {
        res.redirect('https://' + req.headers.host + req.url)
    }
})
server.use('/', router)


module.exports = server