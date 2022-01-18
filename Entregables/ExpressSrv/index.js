const express = require('express')
const app = express()
const PORT = 8080
const Contenedor = require('../Archivos/main')
const filename = './productos.txt'
const contenedor = new Contenedor(filename)

app.get('/', function (req, res, next){
    var home = '<h2>Servidor con dos endpoints desarrollado con Node/Express</h2>'
    home += '<h3><a href="/productos">Get All Products </a></h3>'
    home += '<h3><a href="/productoRandom">Get one random Product</a></h3>'
    res.send(home)
    next()
})

app.get('/productos', function (req, res){
    const allproducts = contenedor.getAll()
    res.send(allproducts)
})
app.get('/productoRandom', function (req, res){
    const id = randomIntFromInterval(1, 3)
    const product = contenedor.getById(id)
    res.send(product)
})

const server = app.listen(PORT, () => {
    console.log(`Server Http linstening on port ${server.address().port}`)
})

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
