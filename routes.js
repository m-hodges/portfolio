const express = require('express')
const path = require('path')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
    console.log('hit / get route')
    res.sendFile(path.join(__dirname + '/build/index.html'))
})