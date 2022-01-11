
const promediar = (a, b) => (a + b) / 2
const p = promediar(4, 8)
console.log(`El promedio es: ${p}`)

const show = (message) => (message)?console.log(message):console.log('Mensaje por defecto')
show('Hola')
show()

//ejemplo de iif
const mayor_menor_10 = (a, b) => (a + b > 10)?console.log("Mayor"):console.log("Menor")
mayor_menor_10(6, 4)
mayor_menor_10(6, 10)

const Operacion = (a, b, operador) => operador(a, b)

const Suma = (a, b) => a + b
const Resta = (a, b) => a - b
const Multiplicacion = (a, b) => a * b
const Division = (a, b) => a / b

console.log(Operacion(4, 5, Suma))
console.log(Operacion(4, 5, Resta))
console.log(Operacion(4, 5, Multiplicacion))
console.log(Operacion(4, 5, Division))

