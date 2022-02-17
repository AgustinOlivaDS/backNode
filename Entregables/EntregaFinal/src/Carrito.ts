const ProdCarrito = require('./ProdCarrito') 
module.exports = class Carrito{
    id: number = 0 ;
    timestamp: Date;
    productos: typeof ProdCarrito[]  = [];
    constructor(){
        this.id = 0
        this.timestamp = new Date()
        this.productos = []
    }
}