const express = require('express');
const userController = require('./controllers/userController');

const router = express.Router();
const userMiddlewares = require('./middlewares/userMiddlewares');

router.get('/users', userController.getAll);
router.post('/users', userMiddlewares.validateFieldName, userMiddlewares.validateFieldEmail, userController.createUser);
router.delete('/users/:id', userController.deleteUser);
router.put('/users/:id', userMiddlewares.validateFieldName, userMiddlewares.validateFieldNotupdated , userController.updateUser);

module.exports = router;