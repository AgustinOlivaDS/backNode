const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
const PORT = 8080
const routes = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cookieParser())

app.use('/api', routes)

app.get('/api/cookie', (req, res) => {
    console.log(req.cookies)
    res.send(req.cookies.micookie)
})
app.post('/api/cookie', (req, res) => {
    const body = req.body
    console.log(body.micookie)
    res.cookie('micookie', body.micookie)
    res.send('Cookie Set')
    console.log(req.cookies)
})

app.use('/', express.static(__dirname + '/public'))

const server = app.listen(PORT, () => {
    console.log(`Server linstening on port ${server.address().port}`)
})
