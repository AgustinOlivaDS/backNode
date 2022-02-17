const Colores = require('./Colors')
const lista = [2,3,5,7];
lista.map(x => x * x).forEach(x => console.log(x));

const Color = new Colores()

Color.getRandomColor()
console.log(Color.RGB)
