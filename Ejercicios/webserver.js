const http = require('http')

const server = http.createServer((req, res) => {
    const fecha = new Date()
    const hora = fecha.getHours()
    let greet = '<h1>Son las ' + hora + '</h1>'
    if(hora >= 6 && hora <= 12){
        greet += '<h2>Buenos días!</h2>'
    }
    if(hora >= 13 && hora <= 19){
        greet += '<h2>Buenas Tardes!</h2>'
    }
    if(hora >= 20 && hora <= 23 ||  hora >= 0 && hora <= 5){
        greet += '<h2>Buenas Noches!</h2>'
    }

    res.end(greet)
})

const conectedServer = server.listen(8080, () => {
    console.log(`Server Http linstening on port ${conectedServer.address().port}`)
})