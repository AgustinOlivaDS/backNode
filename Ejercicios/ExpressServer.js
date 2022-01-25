const express = require('express')
const { use } = require('express/lib/application')
const fs = require('fs');
const handlebars = require('express-handlebars')

const app = express()
var mascotas = express.Router()
const PORT = 8080
let visitas = 0

app.use(express.json())
app.use(express.urlencoded({extended: true}))

let listMascotas = ['Lola', 'India']

mascotas.get('/', function (req, res, next) {
    
    res.send(listMascotas)
    next()
})

mascotas.post('/', function (req, res, next) {
    let newmascota = req.body.fname
    listMascotas.push(newmascota)
    res.send(listMascotas)
    next()
})

// // defino el motor de plantilla
// app.engine('cte', function (filePath, options, callback) {
//     fs.readFile(filePath, function (err, content) {
//       if (err) {
//         return callback(new Error(err));
//       }
//       const rendered = content.toString()
//                               .replace('^^titulo$$', ''+ options.titulo +'')
//                               .replace('^^mensaje$$', ''+ options.mensaje +'')
//                               .replace('^^autor$$', ''+ options.autor +'')
//                               .replace('^^version$$', ''+ options.version +'');
//       return callback(null, rendered);
//     });
//   });
//   app.set('views', __dirname + '/views'); // especifica el directorio de vistas
//   app.set('view engine', 'cte'); // registra el motor de plantillas
  
//   const options = { 
//     titulo: 'Hola',
//     mensaje:'Mensaje',
//     autor: 'Agustin',
//     version: 5
// }

// app.get('/cte1', function (req, res) {
//     res.render('plantilla1', options);
// });
  
app.engine('hbs', handlebars.engine({
    extname: '.hbs', 
    defaultLayout: 'index.hbs', 
    layoutsDir: __dirname + '/views/layouts', 
    partialDir: __dirname + '/views/partials'
}))

app.use('/mascotas', mascotas)
app.use('/public', express.static(__dirname + '/public'))

const server = app.listen(PORT, () => {
    console.log(`Server Http linstening on port ${server.address().port}`)
    console.log(__dirname)
})
