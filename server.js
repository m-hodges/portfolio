const express = require('express')
const path = require('path')
const cors = require('cors')

const server = express()

server.use(express.static(__dirname))
server.use(express.static(path.join(__dirname, 'build')))
server.use('*', (req, res, next) => {
    //replace localhost:8080 to the ip address:port of your server
    res.header("Access-Control-Allow-Origin", "https://m-hodges.com");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    next(); 
});
server.options('*', cors())
server.use((req, res) => {
    if (!req.secure) {
        res.redirect('https://' + req.headers.host)
    }
})
const router = require('./routes')
server.use('/', router)


module.exports = server