const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/*', (req, res) => {
    console.log('Hit the route')
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

module.exports = router