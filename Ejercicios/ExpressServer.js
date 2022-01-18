const express = require('express')
const app = express()
const PORT = 59358
let visitas = 0

app.get('/', function (req, res, next) {
    visitas += 1
    res.send('<h1 style="color:blue;">Bienvenidos al servidor express</h1>')
    next()
})

app.get('/visitas', function (req, res, next) {
    visitas += 1
    res.send('<h1 style="color:black;">Cantidad de visitas ' + visitas + '</h1>')
    next()
})

app.get('/fyh', function (req, res, next) {
    visitas += 1
    let datetime = new Date();
    res.send('<h1 style="color:red;">' + datetime + '</h1>')
    next()
})


const server = app.listen(PORT, () => {
    console.log(`Server Http linstening on port ${server.address().port}`)
})
