const userModel = require('../models/userModel');

const getAll = async (req, res) => {
    const users = await userModel.getAll()
    return res.status(200).json(users);
};

const createUser = async (req, res) => {
    const createdUser = await userModel.createUser(req.body);
    return res.status(201).json(createdUser)
};

module.exports = {
    getAll,
    createUser
};