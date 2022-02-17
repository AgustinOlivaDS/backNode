import express from 'express'
const Carritos = require('../src/Carritos')
var carritos = express.Router()
const Carrits = new Carritos()


carritos.post('/', (req: any, res: any) => {
    const cart: typeof Carrito = req.body
    res.json(Carrits.save(cart))
})

carritos.delete('/:id', (req: any, res: any) => {
    const id:number = parseInt(req.params.id)
    res.json(Carrits.deleteById(id))
})

carritos.get('/:id/productos', (req: any, res: any) => {
    const id = parseInt(req.params.id)
    res.json(Carrits.getById(id).productos)
})

carritos.put('/:id', (req: any, res: any) => {
    const id: number = parseInt(req.params.id)
    const cart: typeof Carrito = req.body
    res.json(Carrits.update(id, cart))
})

carritos.get('/:id/productos/:id_prod', (req: any, res: any) => {
    const id = parseInt(req.params.id)
    const id_prod = parseInt(req.params.id_prod)

    res.json(Carrits.getProductoById(id, id_prod))
})

carritos.get('/:id', (req: any, res: any) => {
    const id = parseInt(req.params.id)
    res.json(Carrits.getById(id))
})

module.exports = carritos