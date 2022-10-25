const conn = require('./connection');

const getAll = async () => {
    const [users] = await conn.execute('SELECT * FROM users');
    return users;
};

const createUser = async (user) => {
    const { nome, sobrenome, email, status } = user;

    const dateUTC = new Date(Date.now()).toUTCString();
    const query = 'INSERT INTO users(nome, sobrenome, email, status, createdAt) VALUES (?, ?, ?, ?, ?)';

    const [createdUser] = await conn.execute(query, [nome, sobrenome, email, 1, dateUTC]);

    return {insertID: createdUser.insertId};
};

const deleteUser = async (id) => {
    const removedUser = await conn.execute('DELETE FROM users WHERE id = ?', [id]);
    return removedUser;
};

const updateUser = async (id, user) => {
    const { nome, sobrenome, status } = user;

    const query = 'UPDATE users SET nome = ?, sobrenome = ?, status = ? WHERE id = ?';

    const updatedUser = await conn.execute(query, [nome, sobrenome, status, id]);
    return updatedUser;
};

module.exports = {
    getAll,
    createUser,
    deleteUser,
    updateUser
};