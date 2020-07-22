const a = require('./a')
const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('Recording Headers')
    next()
})

app.use((req, res, next) => {
    console.log('Recording Querystring')
    next()
})

app.use((req, res, next) => {
    console.log('Save Cache')
    // next(new Error('Save Cache Error'))
    next()
})

app.get('/', (req, res, next) => {
    console.log(req.query)

    res.json({
        ok: true
    })
})

app.use('/api', require('./api'))

app.use((err, req, res, next) => {
    console.log(err)
    res.json({
        error: err.message
    })
})

console.log('server running at :9090')

app.listen(9090)