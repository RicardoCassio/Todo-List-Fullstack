const bcrypt = require('bcrypt');
const User = require("../models/User");

module.exports = {
    async getAll(req, res) {
        const users = await User.findAll();
        return res.json(users);
    },

    async createUser(req, res) {
        const { nome, sobrenome, email, password, status } = req.body;
        const salt = await bcrypt.genSalt(10);

        const password_hash = await bcrypt.hash(password, salt);

        const createdUser = await User.create({ nome, sobrenome, email, password: password_hash, status });

        return res.json(createdUser);
    },

    async updateUser(req, res) {
        const { nome, sobrenome, email, password, status } = req.body;
        const salt = await bcrypt.genSalt(10);

        const password_hash = await bcrypt.hash(password, salt);

        const { id } = req.params;

        const updatedUser = await User.update(
            {nome, sobrenome, email, password: password_hash, status},
            {where: {id}}
        );

        return res.json(updatedUser);
    },

    async deleteUser(req, res) {
        const { id } = req.params;

        const removedUser = await User.destroy({
            where: { id }
        });
        
        return res.json(removedUser);
    }
}