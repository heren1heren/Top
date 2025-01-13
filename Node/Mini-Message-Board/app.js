const express = require('express');
const path = require('node:path');
const app = express();
const assetsPath = path.join(__dirname, 'public');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(assetsPath));

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];
app.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});
app.get('/new', (req, res) => {
  res.render('form', { title: 'message Form' });
});

app.listen(3000, () => {
  console.log('    app is listening at port: localhost:3000');
});
