class Producto{
    constructor(title = "", price = 0.00, thumbnail = ""){
        this.title = title
        this.price = price
        this.thumbnail = thumbnail
        this.id = 0
    }
}

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