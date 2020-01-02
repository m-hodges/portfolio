const express = require('express')
const path = require('path')
const cors = require('cors')

const router = express.Router()

// const corsPermissions = {
//     origin: 'https://m-hodges.com'
// }

router.get('*', cors(), (req, res, next) => {
    // if (!req.secure) {
    //     res.redirect('https://' + req.headers.host)
    // } else {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    // }
})

module.exports = router