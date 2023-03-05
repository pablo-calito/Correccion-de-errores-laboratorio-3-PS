const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        //El email no tiene que ser de type: Number, tiene que ser de tipo String
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }

});


module.exports = model('Usuario', UsuarioSchema);