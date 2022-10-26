const conn = require('../models/connection');

const validateFieldName = (req, res, next) => {
    const { body } = req;

    //verifica se estamos recendo todos os fields obrigatórios e se eles tem algum valor
    if ( body.nome === undefined) {
        return res.status(400).json({message: 'The field "name" is required'});
    }

    if ( body.nome === '') {
        return res.status(400).json({message: 'name cannot be empty'});
    }

    next();
};

const validateFieldEmail = async (req, res, next) => {
    const { body } = req;

    if ( body.email === undefined) {
        return res.status(400).json({message: 'The field "email" is required'});
    }

    if ( body.email === '') {
        return res.status(400).json({message: 'email cannot be empty'});
    }

    //Verifica se o email é um formato válido. (usuario@email.email)
    //Verificar email em um formato válido
    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email)
    }

    if (!validateEmail(body.email)) {
        return res.status(400).json({message: 'email format invalid'});
    }

    //Verifica se o usuário já existe
    const query = `SELECT ID FROM users where email = '${body.email}'`;
    const result = await conn.execute(query);

    if (result[0].length > 0) {
        return res.status(400).json({message: 'Email já cadastrado.'});
    };

    next();
};

const validateFieldNotupdated = (req, res, next) => {
    const { body } = req;

    if (body.email != undefined) {
        return res.status(400).json({message: 'Email field does not allow updating'});
    };    

    if (body.createdAt != undefined) {
        return res.status(400).json({message: 'createdAt field does not allow updating'});
    };   

    next();
};

module.exports = {
    validateFieldName,
    validateFieldEmail,
    validateFieldNotupdated
}



