const { Router } = require('express');

const usersController = require('../controllers/usersController');
const usersRouter = Router();
// Add search functionality via query parameters on the index route. For example, GET /?search=sup should return all usernames containing sup. DON’T implement this in JavaScript, search should be done in SQL.
usersRouter.get('/', usersController.getUsernames);
usersRouter.get('/new', usersController.createUsernameGet);
usersRouter.post('/new', usersController.createUsernamePost);

module.exports = usersRouter;
