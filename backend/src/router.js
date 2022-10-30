const express = require('express');
const userController = require('./controllers/userController');
const taskController = require('./controllers/taskController');

const router = express.Router();
const userMiddlewares = require('./middlewares/userMiddlewares');

// Routes User
router.get('/users', userController.getAll);
router.post('/users', userMiddlewares.validateFieldName, userMiddlewares.validateFieldEmail, userController.createUser);
router.delete('/users/:id', userController.deleteUser);
router.put('/users/:id', userMiddlewares.validateFieldName, userMiddlewares.validateFieldNotupdated , userController.updateUser);

// Routes Task
router.get('/tasks', taskController.getAll);
router.post('/tasks', taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', taskController.updateTask);

module.exports = router;