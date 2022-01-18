
//const filename = 'Entregables/Archivos/productos.txt'

module.exports = class Contenedor{

    fs = require('fs')
    constructor(file = ''){
        this.fileName = file
    }

    save(product){
        const products = this.getAll()
        if(products.length > 0){
            product.id = products[products.length-1].id + 1
        }
        else{
            product.id = 1
        }
        products.push(product)
        try{
            this.fs.writeFileSync(this.fileName, JSON.stringify(products), { encoding: 'utf8' })
        }
        catch(er){
            console.log(`Error saving file: ${er}`)
        }

        return product.id
    }

    getById(id_Product){
        const products = this.getAll()
        
        let founded = products.find(element => element.id === id_Product)

        return founded
    }

    getAll(){
        let products = []
        try{
            const data = this.fs.readFileSync(this.fileName, 'utf8')
            if(data.length > 0){
                products = JSON.parse(data)
            }
        }
        catch(er){
            console.log(`Error en getAll: ${er}`)
        }

        return products   
    }

    deleteById(id_Product){
        const products = this.getAll()
        let founded = products.findIndex(element => element.id === id_Product) 
        if(founded >= 0){
            products.splice(founded, 1)
            try{
                this.fs.writeFileSync(this.fileName, JSON.stringify(products), { encoding: 'utf8' })
            }
            catch(er){
                console.log(`Error saving file: ${er}`)
            }
        }
    }

    deleteAll(){
        try{
            this.fs.writeFileSync(this.fileName, '', { encoding: 'utf8' })
        }
        catch(er){
            console.log(`Error saving file: ${er}`)
        }
    }
}

