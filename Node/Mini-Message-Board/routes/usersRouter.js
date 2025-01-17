const { Router } = require('express');

const usersController = require('../controllers/usersController');

const usersRouter = Router();
usersRouter.get('/', usersController.getUsers);
usersRouter.get('/new', usersController.getForm);
//post
usersRouter.post('/new', usersController.postForm);

usersRouter.get('/:messageText?', usersRouter.getUserByMessage);
