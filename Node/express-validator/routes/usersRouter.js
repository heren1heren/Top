const { Router } = require('express');

const usersController = require('../controllerss/usersController');

const usersRouter = Router();

usersRouter.get('/', usersController.usersListGet);
usersRouter.get('/create', usersController.usersCreateGet);
usersRouter.post('/create', usersController.usersCreatePost);

module.exports = usersRouter;
