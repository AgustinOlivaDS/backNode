//setTimeout(() => { console.log('Hola mundo Timeout')}, 5000)
//setInterval(() => { console.log(`Hola mundo Interval`)}, 2000)

function mostrarLetras(texto, intervalo, cb) {
    texto.split("").forEach(letra => {
        console.log(letra)
        setTimeout(() => {}, intervalo)
    });
    cb()
}
const fin = () => console.log('Terminé')   
mostrarLetras('!Hola!', 0, fin)
mostrarLetras('!HOLA!', 250, fin)
mostrarLetras('!Hola!', 500, fin)