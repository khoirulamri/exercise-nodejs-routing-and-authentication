const express = require('express')

const router = express.Router({ mergeParams: true })

router.get('/list', (req, res) => {
    res.json([
        {
            nama: 'User 1'
        },
        {
            nama: 'User 2'
        },
        {
            nama: 'User 3'
        }
    ])
})

module.exports = router