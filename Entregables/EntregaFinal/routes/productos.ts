import express from 'express'
const Products = require('../src/Products')
var productos = express.Router()
const Prods = new Products('./public/productos.json')

productos.get('/', async (req: any, res: any) => {
    if(!req.administrador){
        res.status(404);
        res.json({error: -1, descripcion: `Ruta ${req.baseUrl} método ${req.method} no autorizada`});
    } else {
        res.json(await Prods.getAll())
    }
})
productos.get('/:id', async (req: any, res: any) => {
    const id = parseInt(req.params.id)
    res.json(await Prods.getById(id))
})

productos.post('/', async (req: any, res: any) => {
    if(!req.administrador){
        res.status(404);
        res.json({error: -1, descripcion: `Ruta ${req.baseUrl} método ${req.method} no autorizada`});
    } else {
        const prod: typeof Product = req.body
        res.json(await Prods.save(prod))
    }
})

productos.put('/:id', async (req: any, res: any) => {
    if(!req.administrador){
        res.status(404);
        res.json({error: -1, descripcion: `Ruta ${req.baseUrl} método ${req.method} no autorizada`});
    } else {
        const id: number = parseInt(req.params.id)
        const prod: typeof Product = req.body
        res.json(await Prods.update(id, prod))
    }
})

productos.delete('/:id', async (req: any, res: any) => {
    if(!req.administrador){
        res.status(404);
        res.json({error: -1, descripcion: `Ruta ${req.baseUrl} método ${req.method} no autorizada`});
    } else {
        const id:number = parseInt(req.params.id)
        res.json(await Prods.deleteById(id))
    }
})

module.exports = productos