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
  body('email').trim().isEmail().withMessage('email format is wrong'),
  body('Age')
    .optional()
    .trim()
    .isNumeric()
    .withMessage('must contain only number'),
  body('bio')
    .optional()
    .trim()
    .isLength({ min: 0, max: 200 })
    .withMessage('must be between 1 and 200 chars'),
];
exports.usersListGet = (req, res) => {
  // console.log(usersStorage);
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
    const { firstName, lastName, email, age, bio } = req.body; // get it from the form
    usersStorage.addUser({
      firstName,
      lastName,
      email,
      age,
      bio,
    });
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
    const { firstName, lastName, email, age, bio } = req.body;
    usersStorage.updateUser(req.params.id, {
      firstName,
      lastName,
      email,
      age,
      bio,
    });
    res.redirect('/');
  },
];

exports.usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect('/');
};

exports.usersSearchGet = (req, res) => {
  const { name } = req.query;

  const users = usersStorage.getUsers();
  const filterUsers = [];

  users.forEach((user) => {
    if (user.firstName === name) {
      filterUsers.push(user);
    }
  });

  // search throught database -> return
  // usersStorage is empty. Why?
  // pass a list of users if found
  res.render('search', { filterUsers, name });
};
