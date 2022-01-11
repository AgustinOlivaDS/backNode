
const operacion = (valor1,valor2,strategy) => strategy(valor1,valor2)

const suma = (valor1, valor2) => valor1 + valor2 
const resta = (valor1, valor2) => valor1 - valor2 
const multiplicacion = (valor1, valor2) => valor1 * valor2 
const division = (valor1, valor2) => valor1 / valor2 
const palabra = (valor1, valor2) => 'Mi palabra'

const hacerOperacion = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const result = suma(0,0, palabra)
        if(result>0){
            resolve(result)
        }
        else{
            reject('Error al ejecutar la operacion')
        }
    }, 1000);
})

hacerOperacion.then(console.log).catch(console.log)
