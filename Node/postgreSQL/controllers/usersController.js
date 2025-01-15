const db = require('../db/queries');

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log('Usernames: ', usernames);
  res.send(`Usernames: ` + usernames.map((user) => user.username).join(', '));
}

async function createUsernameGet(req, res) {
  // render the form
  res.send(`<form action="#" method="post">
        <label for="username">Enter a username:</label>
        <input type="text" id="username" name="username" required>
        <button type="submit">Submit</button>
    </form>`);
}

async function createUsernamePost(req, res) {
  //req.body is undefined mean the data doesn't pass throw
  // why is it this way?
  // -> this is because I don't use app.use(express.json())
  // there is req.body but it is empty
  // why is it empty?
  // -> submit wrong inputs from the form ?
  // there is req.body.username now.
  // but the db failed to process
  console.log(req.body.username);
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect('/');
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
};
