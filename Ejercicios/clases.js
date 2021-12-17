class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    static saludoCorto = 'hola'

    saludoCompleto() {
        console.log(`buenaaass, soy ${this.nombre}`)
    }
 
    saludoEstatico() {
        console.log(Persona.saludoCorto)
    }
 
}

const yo = new Persona('Agustin', 45)
Persona.saludoCorto = 'Hello'
yo.saludoCompleto()
yo.saludoEstatico()