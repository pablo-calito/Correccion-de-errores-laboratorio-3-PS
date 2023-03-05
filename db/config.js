
const mongoose = require('mongoose');

const dbConection = async () => {
    try {
        //Aca tenia una N de mas en el process.env.DB_CNN
        await mongoose.connect(process.env.DB_CN);

        console.log('Db Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error al inicializar la DB');
    }
}

module.exports = {
    dbConection
}