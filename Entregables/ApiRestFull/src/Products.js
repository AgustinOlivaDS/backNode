module.exports = class Products{
    static products = []
    constructor(){
        this.products = [{id: 1, title: 'regla'}]
    }

    save(product){
        if(this.products.length > 0){
            product.id = this.products[this.products.length-1].id + 1
        }
        else{
            product.id = 1
        }
        this.products.push(product)
        
        return {error: 'ok', id: product.id}   
    }

    update(id_Product, product){
        let founded = this.products.findIndex(element => element.id === id_Product)
        console.log(founded)
        if(founded === -1){    
            return {error: 'Producto no encontrado'}
        } else {
            try{
                this.products[founded].title = product.title
                this.products[founded].price = product.price
                this.products[founded].thumbnail = product.thumbnail
                return {error: 'ok', productos: this.products[founded]}
            }
            catch(er){
                return {error: er}
            }
        }
    }

    getById(id_Product){
        
        let founded = this.products.find(element => element.id === id_Product)

        if(typeof founded === 'undefined'){
            return {error: 'Producto no encontrado', productos: founded}
        } else {
            return {error: 'ok', productos: founded}   
        }
    }

    getAll(){
        console.log(this.products)
        if(this.products.length > 0){
            return {error: 'ok', productos: this.products}   
        } else {
            return {error: 'No existen productos', productos: this.products}
        }
    }

    deleteById(id_Product){
        let founded = this.products.findIndex(element => element.id === id_Product) 
        if(!(typeof founded === 'undefined')){
            this.products.splice(founded, 1)
            return {error: 'Producto Eliminado'}   
        } else {
            return {error: `No existe producto con id: ${id_Product}`}
        }
    }

    deleteAll(){
        this.products = []
    }
}

