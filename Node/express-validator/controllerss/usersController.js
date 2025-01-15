const { body, validationResult } = require('express-validator');
const usersStorage = require('../storages/usersStorage');

const alphaErrMessage = 'must only contain letters'; // good tip to refactor the code
const lengthErr = 'must be between 1 and 10 letters';
// a middlewares array to check err and then apply to req by using body()

const validateUser = [
  body('firstName')
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErrMessage}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body('lastName')
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErrMessage}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
];
exports.usersListGet = (req, res) => {
  res.render('index', {
    title: 'User list',
    users: usersStorage.getUsers(),
  });
};

exports.usersCreateGet = (req, res) => {
  res.render('createUser', {
    title: 'Create user',
  });
};

exports.usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('createUser', {
        title: 'create user',
        errors: errors.array(), // pushing errors to the template to render there
      });
    }
    const { firstName, lastName } = req.body;
    usersStorage.addUser({ firstName, lastName });
    res.redirect('/');
  },
];
exports.usersUpdateGet = (req, res) => {
  const user = usersStorage.getUser(req.params.id);
  res.render('updateUser', {
    title: 'Update user',
    user,
  });
};

exports.usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render('updateUser', {
        title: 'Update user',
        user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName } = req.body;
    usersStorage.updateUser(req.params.id, { firstName, lastName });
    res.redirect('/');
  },
];

exports.usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect('/');
};
