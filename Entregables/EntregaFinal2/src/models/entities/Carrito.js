const ProdCarrito = require('./ProdCarrito') 
module.exports = class Carrito{
    id = 0 ;
    timestamp;
    productos  = [];
    constructor(){
        this.id = 0
        this.timestamp = new Date()
        this.productos = []
    }
}