const express = require('express')

const router = express.Router({ mergeParams: true })

router.get('/saying/:nama?', (req, res, next) => {
    let nama = 'anonim'

    if (req.params.nama) {
        nama = req.params.nama
    }
    res.json({
        say: "Hai Apa Kabar " + nama
    })
})

router.get('/saying/:nama/:kota', (req, res, next) => {
    res.json({
        say: "Hai Apa Kabar " + req.params.nama + " di kota " + req.params.kota
    })
})

router.use('/users', require('./users'))

module.exports = router