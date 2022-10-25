const userModel = require('../models/userModel');

const getAll = async (req, res) => {
    const users = await userModel.getAll()
    return res.status(200).json(users);
};

const createUser = async (req, res) => {
    const createdUser = await userModel.createUser(req.body);
    return res.status(201).json(createdUser)
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    await userModel.deleteUser(id);
    return res.status(204).json();
};

const updateUser = async (req, res) => {
    const { id } = req.params;

    const updatedUser = await userModel.updateUser(id, req.body);
    return res.status(204).json();
};

module.exports = {
    getAll,
    createUser,
    deleteUser,
    updateUser
};