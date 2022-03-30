import Router from "express";

export const route_register = Router();

route_register.get('/register', (req, res)=>{
    res.render('register');
})

route_register.post('/register', (req, res)=>{
    const {nombre, password, direccion } = req.body;
    
    const newUsuario = usuariosDB.find(usuario => usuario.nombre == nombre);
    if (newUsuario) {
        res.render('register-error')
    } else {
        usuariosDB.push({nombre, password, direccion});
        res.redirect('/login')
    }
});