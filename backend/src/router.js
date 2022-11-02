const express = require('express');
const { body, validationResult } = require('express-validator');

const userController = require('./controllers/userController');
const taskController = require('./controllers/taskController');

const router = express.Router();

// Routes User
router.get('/users', userController.getAll);
router.post('/users', [
    body('nome').notEmpty().withMessage("Campo nome é obrigatório."),
    body('sobrenome').notEmpty().withMessage("Campo sobrenome é obrigatório."),
    body('email').isEmail().withMessage("Campo email não é válido."),
    body('password').notEmpty().isLength({ min: 8 }).withMessage("Campo password precisa ter pelo menos 8 caracteres."),
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json( {errors: errors.array()} );
    }

    userController.createUser(req, res);
});
router.delete('/users/:id', userController.deleteUser);
router.put('/users/:id', [
    body('nome').notEmpty().withMessage("Campo nome é obrigatório."),
    body('sobrenome').notEmpty().withMessage("Campo sobrenome é obrigatório."),
    body('email').isEmail().withMessage("Campo email não é válido."),
    body('password').notEmpty().isLength({ min: 8 }).withMessage("Campo password precisa ter pelo menos 8 caracteres."),
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json( {errors: errors.array()} );
    }

    userController.updateUser(req, res);
});

// Routes Task
//router.get('/tasks', taskController.getAll);
//router.post('/tasks', taskController.createTask);
//router.delete('/tasks/:id', taskController.deleteTask);
//router.put('/tasks/:id', taskController.updateTask);

module.exports = router;