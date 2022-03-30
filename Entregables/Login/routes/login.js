import Router from "express";
import passport from "passport";
import Strategy from "passport-local";
const LocalStrategy = Strategy;

export const route_login = Router();

route_login.get('/login', (req, res)=>{
    res.render('login');
})

route_login.post('/login', passport.authenticate('local', 
    {
        successRedirect: '/datos',
        failureRedirect: '/login-error'
    }
))

route_login.get('/logout', (req, res)=>{
    req.user.contador = 0;
    req.logOut();
    res.redirect('/');
});

route_login.get('/login-error', (req, res)=>{
    res.render('login-error');
})

/*----------- Passport -----------*/
passport.use(new LocalStrategy(
    (username, password, done)=>{
        //Logica para validar si un usuario existe
        const existeUsuario = usuariosDB.find(usuario => {
            return usuario.nombre == username;
        });

        if (!existeUsuario) {
            console.log('Usuario no encontrado')
            console.log(usuariosDB)
            return done(null, false);
        }

        if(!(existeUsuario.password == password)){
            console.log('Contrase;a invalida')
            return done(null, false);
        }

        return done(null, existeUsuario);
    }
))

passport.serializeUser((usuario, done)=>{
    done(null, usuario.nombre);
})

passport.deserializeUser((nombre, done)=>{
    const usuario = usuariosDB.find(usuario => usuario.nombre == nombre);
    done(null, usuario);
});
