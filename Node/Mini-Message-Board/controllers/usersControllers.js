const db = require('../db/queries');

async function getUsers(req, res) {
  const messages = await db.getAllMessages();
  console.log('Messages: ', messages);
  //  res.send(`Usernames: ${usernames.map((user) => user.username).join(', ')}`);
  res.render('index', {
    title: 'Mini Messageboard',
    messages,
  });
}
// async function getForm(req, res) {
//   res.render('form', { title: 'message Form' });
// }
// async function postForm(req, res) {
//   console.log(req.body);
//   // messages.push({
//   //   text: req.body.messageText,
//   //   user: req.body.messageAuthor,
//   //   added: new Date(),
//   // });
//   const { username } = req.body;
//   await db.insertMessage(username);
//   res.redirect('/');
// }

module.exports = {
  getUsers,
  // getForm,
  // postForm,
};
