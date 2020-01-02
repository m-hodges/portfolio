const express = require('express')
const path = require('path')
const cors = require('cors')

const server = express()

server.options('*', cors())

const corsOptions = {
    origin: 'https://m-hodges.com'
}

server.use(express.static(__dirname))
server.use(express.static(path.join(__dirname, 'build')))
server.use('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://m-hodges.com")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.header('Access-Control-Allow-Credentials', true)
    next()
})
server.use(cors(corsOptions))
server.use((req, res) => {
    if (!req.secure) {
        res.redirect('https://' + req.headers.host)
    }
})

const router = require('./routes')
server.use('/', router)

module.exports = server