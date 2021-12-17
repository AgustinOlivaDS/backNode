// Hola a todos!!! Prueben realizar lo visto en clase para tener los conceptos claros para el jueves!!! Buen miércoles !!!  Definir variables que almacenen los siguiente datos:
// Un nombre: “pepe”
// Una edad: 25
// Un precio: $99.90
// Los nombres de mis series favoritas: “Dark”, “Mr Robot”, “Castlevania”
// Mis películas favoritas, en donde cada película detalla su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
// Mostrar todos esos valores por consola
// Incrementar la edad en 1 y volver a mostrarla
// Agregar una serie a la lista y volver a mostrarla

let nombre = "pepe"
let edad = 25
let precio = 99.90
let seriesFav = ["Dark", "Mr Robot", "Castlevania"]
let moviesFav = [{name:"Avatar", year:2010, actors:["Actor1", "Actor2", "Actor3"]}, 
                {name:"Dumbo", year:2005, actors:["Actor1", "Actor2", "Actor3"]}, 
                {name:"ToyStory", year:2015, actors:["Actor1", "Actor2", "Actor3"]}]
console.log(nombre)
console.log(edad)
console.log(precio)
console.table(seriesFav)
console.table(moviesFav)

edad += 1
console.log(edad)

seriesFav.push("Lost")
console.table(seriesFav)

