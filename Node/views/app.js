const express = require('express');

const app = express();
const path = require('node:path');

const links = [
  { href: '/', text: 'Home' },
  { href: 'about', text: 'About' },
  { href: 'contact-me', text: 'contact' },
];
const users = ['Rose', 'Cake', 'Biff'];
const assetsPath = path.join(__dirname, 'public');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(assetsPath));

app.get('/', (req, res) => {
  res.render('index', { links, users });
});
const Port = 3000;
app.listen(Port, () => {
  console.log('listening to 3000 port access with this link: localhost:3000');
});
