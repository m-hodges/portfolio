const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/*', (req, res) => {
    // console.log('Hit the route')
    // var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    // console.log(req.protocol)
    // console.log(req.get('host'))
    // console.log(req.originalUrl)
    if (req.protocol === 'http') {
        // console.log('https' + '://' + req.get('host'))
        res.redirect('https' + '://' + req.get('host'))
    } else {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    }
})

module.exports = router