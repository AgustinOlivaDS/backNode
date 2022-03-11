const express = require('express')
var test = express.Router()

const nombres = ['Luis', 'Lucia', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Perez', 'Oliva', 'Gonzalez', 'Beer', 'Lopez']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

function getPersona(){
    x= Math.floor(5 * Math.random())
    return {
        nombre: nombres[x],
        apellido: apellidos[x], 
        color: colores[x]
    }
}

test.get('/test', (req, res) => {
    const person = getPersona()
    res.send(person)
})

module.exports = test