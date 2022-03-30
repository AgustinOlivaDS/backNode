import Router from "express";

export const route_datos = Router();

route_datos.get('/', (req, res)=>{
    if (req.session.nombre) {
        res.redirect('/datos')
    } else {
        res.redirect('/login')
    }
})

route_datos.get('/datos', isAuth, (req, res)=>{
    if(!req.user.contador){
        req.user.contador = 1
    } else {
        req.user.contador++
    }
    const datosUsuario = {
        nombre: req.user.nombre,
        direccion: req.user.direccion
    }
    res.render('datos', {contador: req.user.contador, datos: datosUsuario});
});