const Product = require('./Product') 
module.exports = class Products{
    
    static products: typeof Product[]  = []
    constructor(){
        Products.products = [{id: 1, title: 'regla'}]
    }

    save(product: typeof Product){
        if(Products.products.length > 0){
            product.id = Products.products[Products.products.length-1].id + 1
        }
        else{
            product.id = 1
        }
        product.timestamp = Date.now()
        Products.products.push(product)
        
        return {error: 'ok', id: product.id}   
    }

    update(id_Product: number, product: typeof Product){
        let founded = Products.products.findIndex(element => element.id === id_Product)
        console.log(founded)
        if(founded === -1){    
            return {error: 'Producto no encontrado'}
        } else {
            try{
                Products.products[founded].title = product.title
                Products.products[founded].price = product.price
                Products.products[founded].thumbnail = product.thumbnail
                return {error: 'ok', productos: Products.products[founded]}
            }
            catch(er){
                return {error: er}
            }
        }
    }

    getById(id_Product: number){
        
        let founded = Products.products.find(element => element.id === id_Product)

        if(typeof founded === 'undefined'){
            return {error: 'Producto no encontrado', productos: founded}
        } else {
            return {error: 'ok', productos: founded}   
        }
    }

    getAll(){
        console.log(Products.products)
        if(Products.products.length > 0){
            return {error: 'ok', productos: Products.products}   
        } else {
            return {error: 'No existen productos', productos: Products.products}
        }
    }

    deleteById(id_Product: number){
        let founded = Products.products.findIndex(element => element.id === id_Product) 
        if(!(typeof founded === 'undefined')){
            Products.products.splice(founded, 1)
            return {error: 'Producto Eliminado'}   
        } else {
            return {error: `No existe producto con id: ${id_Product}`}
        }
    }

    deleteAll(){
        Products.products = []
    }
}
