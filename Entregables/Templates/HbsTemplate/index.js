const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const PORT = 8080

const Products = require('./src/products.js')
const Prods = new Products()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(__dirname + '/public'))

app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
    })
);

app.set("view engine", "hbs");
app.set("views", "./views");

app.post('/productos', (req, res) => {
    const producto = req.body
    Prods.save(producto)
    res.redirect('/')
})

app.get('/productos', (req, res) => {
    const prods = Prods.getAll()
    if(typeof prods.productos === 'undefined'){
        console.log(`len del productos: undefined, error: ${prods.error}`)
        res.render("vista", {
            allProducts: prods,
            hayProductos: false
        });
    } else { 
        console.log(`len del productos: ${prods.productos.length}, error: ${prods.error}`)
        res.render("vista", {
            allProducts: prods,
            hayProductos: (prods.productos.length > 0)
        });
    }
});

const server = app.listen(PORT, () => {
    console.log(`Server linstening on port ${server.address().port}`)
})