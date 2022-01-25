const express = require('express')
const Products = require('../src/Products')
var productos = express.Router()
const Prods = new Products()


productos.get('/productos', (req, res) => {
    res.json(Prods.getAll())
})
productos.get('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.json(Prods.getById(id))
})

productos.post('/productos', (req, res) => {
    product = req.body
    res.json(Prods.save(product))
})

productos.put('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const product = req.body
    res.json(Prods.update(id, product))
})

productos.delete('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.json(Prods.deleteById(id))
})

module.exports = productos