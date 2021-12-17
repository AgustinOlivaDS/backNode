
function mostrarLista(lista){
    
    if(lista.length > 0){
        lista.forEach(element => {
            console.log(element)
        });

    } else {
        console.log("lista vacia")
    }
}
const milista = [1,2,3,4]

mostrarLista(milista)

function crearMultiplicador(numero){
    return function (otronumero){
        return numero*otronumero
    }
}
const duplicar = crearMultiplicador(2)
console.log(`el doble de 3 es: ${duplicar(3)}`)
const triplicar = crearMultiplicador(3)
console.log(`el triple de 3 es: ${triplicar(3)}`)