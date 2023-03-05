const { response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = ( req, res = response, next ) => {

    // x-token headers
    const token = req.header('x-token');

    if( !token ){
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        })
    }

    try {

        const { uid, name} = jwt.verify(
            token,
            //En la siguiente linea tenia un error en el SECRET_JWT_SEED (Tenia una E de mas)
            process.env.SECRET_JWT_SED
        );

        //La Siguiente linea tenia un error, se tenia que colocar el req.user

        req.user = { uid, name };
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        })
    } //Falto parentesis

     next();

}


module.exports = {
    validarJWT
}