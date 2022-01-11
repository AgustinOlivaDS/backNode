const fs = require('fs')

//const archivo = fs.mkdirSync('Ejercicios/Archivos')
fs.writeFileSync('Ejercicios/Archivos/text.txt', 'Archivo de prueba \n')
fs.appendFileSync('Ejercicios/Archivos/text.txt', 'Archivo de prueba 2')