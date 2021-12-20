class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.Nombre = nombre
        this.Apellido = apellido
        this.Libros = libros
        this.Mascotas = mascotas
    }

    getFullName(){
        //Use template Strings to get the Name property concatenate with de Lastname prop
        return `${this.Nombre} ${this.Apellido}`
    }

    addMascota(newMascota){
        //Use de push method to add an object to the array
        this.Mascotas.push(newMascota)
    }

    addBook(newBook){
        //Use de push method to add an object to the array
        this.Libros.push(newBook)
    }

    getBookNames(){
        //Use de map function to get only the books names
        return this.Libros.map(a => a.nombre)
    }
}


//Class Test
//Instantiate new Class Usuario Object
const newuser = new Usuario("Agustín", "Oliva", [{nombre: "Libro 1", autor: "Autor 1"}, {nombre: "Libro 2", autor: "Autor 2"}], ["Mascota 1", "Mascota 2"])

//Use of the addMascota method to add a new pet to the array
newuser.addMascota("Mascota 3")

//Test getFullName method
console.log(newuser.getFullName())

//Use of the addBook method to add a new book object to the Librros arrray
newuser.addBook({nombre: "Libro 3", autor: "Autor 2"})

//View th results
console.table(newuser)

//Use of the getBookNames to get an array only with the names of the Libros objects array
console.log(newuser.getBookNames())