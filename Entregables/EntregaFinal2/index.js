const express = require('express')
const app = express()
const PORT = 8080
const prod_routes = require('../routes/productos')
const cart_routes = require('../routes/carritos')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Validate User
app.use(function(req, res, next) {
    req.administrador = true
    console.log(`administrador ${req.administrador}`)
    next()
});

app.use('/api/productos', prod_routes)
app.use('/api/carrito', cart_routes)

/*Not Found Page */
app.use(function(req, res, next) {
    res.status(404);
    res.json({error: -2, descripcion: `Error 404. Ruta ${req.baseUrl} método ${req.method} no implementado`});
});

app.use('/', express.static(__dirname + '/public'))

const server = app.listen(PORT, () => {
    console.log(`Server linstening on port ${server.address().port}`)
})
