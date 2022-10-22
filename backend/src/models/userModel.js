const conn = require('./connection');

const getAll = async () => {
    const [users] = await conn.execute('SELECT * FROM users');
    return users;
};

const createUser = async (user) => {
    const { nome, sobrenome, email, status } = user;

    //Valida campos obrigatorios
    if (nome === '' || nome === null) {
        return {errorValidação: 'O nome é obrigatório'};
    };

    if (email === '' || email === null) {
        return {errorValidação: 'O email é obrigatório'};
    };

    //Verifica se o usuário já existe
    let query = `SELECT ID FROM users where email = ${email}`;

    if (query) {
        return {errorValidação: 'Email já cadastrado.'};
    };

    //Se passar por todas verificações, faz o insert.
    const dateUTC = new Date(Date.now()).toUTCString();
    query = 'INSERT INTO users(nome, sobrenome, email, status, createdAt) VALUES (?, ?, ?, ?, ?)';

    const [createdUser] = await conn.execute(query, [nome, sobrenome, email, 1, dateUTC]);

    return {insertID: createdUser.insertId};
};

module.exports = {
    getAll,
    createUser
};