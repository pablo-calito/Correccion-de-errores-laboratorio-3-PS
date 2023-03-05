/*
    Rutas de usuarios / AUTH
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

// Rutas
router.post(
    '/new', 
    [ //Middlewares
        //Aca se coloco nombre, pero en el modelo se definio como name
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        //Aca se coloco correo, pero en el modelo se definio como email
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'Password es obligatorio y debe ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ]  
    , crearUsuario);


router.post(
    '/login', 
    [ //Middlewares
        //Aca se coloco correo, pero en el modelo se definio como email
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'Password es obligatorio y debe ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ]
    , loginUsuario);


router.get('/renew', validarJWT ,revalidarToken);


module.exports = router;
