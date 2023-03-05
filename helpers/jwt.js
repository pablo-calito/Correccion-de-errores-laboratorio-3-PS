const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, name };
        //Aca tenia una E de mas en el process.env.SECRET_JWT_SEED,
        jwt.sign(payload, process.env.SECRET_JWT_SED, { expiresIn: '2h' }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            }
            resolve(token);
        });
    });
};

module.exports = {
    generarJWT
};