import express from 'express'
const Products = require('../src/Products')
const Carritos = require('../src/Carritos')
var productos = express.Router()
const Prods = new Products()
const Carrits = new Carritos()


productos.get('/', (req: any, res: any) => {
    if(!req.administrador){
        res.status(404);
        res.json({error: -1, descripcion: `Ruta ${req.baseUrl} método ${req.method} no autorizada`});
    } else {
        res.json(Prods.getAll())
    }
})
productos.get('/:id', (req: any, res: any) => {
    const id = parseInt(req.params.id)
    res.json(Prods.getById(id))
})

productos.post('/', (req: any, res: any) => {
    if(!req.administrador){
        res.status(404);
        res.json({error: -1, descripcion: `Ruta ${req.baseUrl} método ${req.method} no autorizada`});
    } else {
        const prod: typeof Product = req.body
        res.json(Prods.save(prod))
    }
})

productos.put('/:id', (req: any, res: any) => {
    if(!req.administrador){
        res.status(404);
        res.json({error: -1, descripcion: `Ruta ${req.baseUrl} método ${req.method} no autorizada`});
    } else {
        const id: number = parseInt(req.params.id)
        const prod: typeof Product = req.body
        res.json(Prods.update(id, prod))
    }
})

productos.delete('/:id', (req: any, res: any) => {
    if(!req.administrador){
        res.status(404);
        res.json({error: -1, descripcion: `Ruta ${req.baseUrl} método ${req.method} no autorizada`});
    } else {
        const id:number = parseInt(req.params.id)
        res.json(Prods.deleteById(id))
    }
})

module.exports = productos