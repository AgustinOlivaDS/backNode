
const Contenedor = require('./main')
const filename = './productos.txt'


const contenedor = new Contenedor(filename)

console.log('Delete the existent products to add four new ones')
contenedor.deleteAll()

let newProd = {"title": "Escuadra", "price": 123.45, "thumbnail": "httm://Esc.jpg"}
console.log(contenedor.save(newProd))
newProd = {"title": "Calculadora", "price": 234.56, "thumbnail": "httm://Calc.jpg"}
console.log(contenedor.save(newProd))
newProd = {"title": "Globo Terraque", "price": 345.67, "thumbnail": "httm://Glo.jpg"}
console.log(contenedor.save(newProd))
newProd = {"title": "Nuevo", "price": 987.65, "thumbnail": "httm://New.jpg"}
console.log(contenedor.save(newProd))

console.log('Get the productg with id equals two')
console.log(contenedor.getById(2))
console.log('Delete the productg with id equals four')
contenedor.deleteById(4)

console.table(contenedor.getAll())