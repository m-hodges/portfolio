const express = require('express')
const path = require('path')

const router = express.Router()

module.exports = router

router.get('*', (req, res) => {
    console.log('hit the server')
    res.redirect('https://' + req.headers.host + req.url)
})