const express = require('express')
const path = require('path')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
    res.render(path.join(__dirname, 'build', 'index.html'))
})

router.get('/hi', (req, res) => {
    res.render('hi')
})