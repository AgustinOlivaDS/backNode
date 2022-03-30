/*============================[Modulos]============================*/
import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import bodyParser from "body-parser";
import exphbs from "express-handlebars";
import path from "path";


import {route_login} from "./routes/login.js"
import {route_register} from "./routes/register.js"
import {route_datos} from "./routes/index.js"

const app = express();

/*----------- Session -----------*/
app.use(cookieParser());
app.use(session({
    store: '',
    secret: '1234567890!@#$%^&*()',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 20000 //20 seg
    }
}))

app.use(route_login.passport.initialize());
app.use(route_login.passport.session());

/*----------- Motor de plantillas -----------*/
app.set('views', path.join(path.dirname(''), './views') )
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

/* functions */
function isAuth(req, res, next) {
    if(req.isAuthenticated()){
        next()
    } else {
        res.redirect('/login')
    }
}

/*============================[Base de Datos]============================*/
const usuariosDB = [];

/*============================[Rutas]============================*/

app.use('/', route_login)
app.use('/', route_register)
app.use('/', route_datos)

/*============================[Servidor]============================*/
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`);
})
server.on('error', error=>{
    console.error(`Error en el servidor ${error}`);
});
