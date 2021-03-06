import express from 'express'
const Carritos = require('../src/Carritos')
var carritos = express.Router()
const Carrits = new Carritos('./public/carritos.json')



carritos.post('/', async (req: any, res: any) => {
    const cart: typeof Carrito = req.body
    res.json(await Carrits.save(cart))
})

carritos.delete('/:id', async (req: any, res: any) => {
    const id:number = parseInt(req.params.id)
    res.json(await Carrits.deleteById(id))
})

carritos.get('/:id/productos', async (req: any, res: any) => {
    const id = parseInt(req.params.id)
    res.json(await Carrits.getById(id).productos)
})

carritos.post('/:id/productos', async (req: any, res: any) => {
    const id = parseInt(req.params.id)
    const prodcart: typeof ProdCarrito = req.body
    res.json(await Carrits.saveProductoById(id, prodcart))
})

carritos.put('/:id', async (req: any, res: any) => {
    const id: number = parseInt(req.params.id)
    const cart: typeof Carrito = req.body
    res.json(await Carrits.update(id, cart))
})

carritos.get('/:id/productos/:id_prod', async (req: any, res: any) => {
    const id = parseInt(req.params.id)
    const id_prod = parseInt(req.params.id_prod)

    res.json(await Carrits.getProductoById(id, id_prod))
})

carritos.delete('/:id/productos/:id_prod', async (req: any, res: any) => {
    const id = parseInt(req.params.id)
    const id_prod = parseInt(req.params.id_prod)

    res.json(await Carrits.deleteProductoById(id, id_prod))
})

carritos.get('/:id', async (req: any, res: any) => {
    const id = parseInt(req.params.id)
    res.json(await Carrits.getById(id))
})

module.exports = carritos