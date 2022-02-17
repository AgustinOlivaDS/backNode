const Carrito = require('./Carrito')

module.exports = class Carritos{
    
    static carritos: typeof Carrito[]  = []
    constructor(){
        Carritos.carritos = []
    }

    save(carrito: typeof Carrito){
        if(Carritos.carritos.length > 0){
            carrito.id = Carritos.carritos[Carritos.carritos.length-1].id + 1
        }
        else{
            carrito.id = 1
        }
        carrito.timestamp = Date.now()
        carrito.productos.forEach((element: typeof ProdCarrito) => {
            element.timestamp = Date.now()
        });
        Carritos.carritos.push(carrito)
        
        return {error: 'ok', id: carrito.id}   
    }

    update(id_Carrito: number, carrito: typeof Carrito){
        let founded = Carritos.carritos.findIndex(element => element.id === id_Carrito)
        console.log(founded)
        if(founded === -1){    
            return {error: 'Carrito no encontrado'}
        } else {
            try{
                Carritos.carritos[founded].productos = carrito.productos
                return {error: 'ok', carritos: Carritos.carritos[founded]}
            }
            catch(er){
                return {error: er}
            }
        }
    }

    getById(id_Carrito: number){
        
        let founded = Carritos.carritos.find(element => element.id === id_Carrito)

        if(typeof founded === 'undefined'){
            return {error: 'Carrito no encontrado', carritos: founded}
        } else {
            return {error: 'ok', carritos: founded}   
        }
    }

    getProductoById(id_Carrito: number, id_Producto: number){
        let founded = Carritos.carritos.findIndex(element => element.id === id_Carrito) 
        if(!(typeof founded === 'undefined')){
            let Prodfounded = Carritos.carritos[founded].productos.findIndex((pelement: typeof ProdCarrito) => pelement.id === id_Producto) 
            if(!(typeof Prodfounded === 'undefined')){
                Carritos.carritos[founded].productos.splice(Prodfounded, 1)
                return {error: 'ok', producto: Prodfounded}   
            } else {
                return {error: `No existe producto con id: ${id_Producto}`}
            }
        } else {
            return {error: `No existe carrito con id: ${id_Carrito}`}
        }
    }

    getAll(){
        console.log(Carritos.carritos)
        if(Carritos.carritos.length > 0){
            return {error: 'ok', carritos: Carritos.carritos}   
        } else {
            return {error: 'No existen carritos', carritos: Carritos.carritos}
        }
    }

    deleteById(id_Carrito: number){
        let founded = Carritos.carritos.findIndex(element => element.id === id_Carrito) 
        if(!(typeof founded === 'undefined')){
            Carritos.carritos.splice(founded, 1)
            return {error: 'Carrito Eliminado'}   
        } else {
            return {error: `No existe carrito con id: ${id_Carrito}`}
        }
    }

    deleteProductoById(id_Carrito: number, id_Producto: number){
        let founded = Carritos.carritos.findIndex(element => element.id === id_Carrito) 
        if(!(typeof founded === 'undefined')){
            let Prodfounded = Carritos.carritos[founded].productos.findIndex((pelement: typeof ProdCarrito) => pelement.id === id_Producto) 
            if(!(typeof Prodfounded === 'undefined')){
                Carritos.carritos[founded].productos.splice(Prodfounded, 1)
                return {error: 'Producto Eliminado'}   
            } else {
                return {error: `No existe producto con id: ${id_Producto}`}
            }
        } else {
            return {error: `No existe carrito con id: ${id_Carrito}`}
        }
    }

    deleteAll(){
        Carritos.carritos = []
    }
}