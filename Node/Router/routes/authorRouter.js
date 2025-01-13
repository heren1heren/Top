// routes/authorRouter.js
const { Router } = require('express');

const authorRouter = Router();

authorRouter.get('/', (req, res) => res.send('All authors'));
authorRouter.get('/:authorId', (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});

module.exports = authorRouter;


app.get('/google', (req, res) => {
    res.redirect('https://www.google.com');
});
app.get('/',  (req, res) => {
    res.send('hello world');
});
app.get('/', function (req, res) {
    res.status(200).json({ user: 'geek' });
});