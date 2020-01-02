const express = require('express')
const path = require('path')
const cors = require('cors')

const router = express.Router()

router.get('*', cors(), (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

module.exports = router