const express = require('express');
const path = require('node:path');
const app = express();
const assetsPath = path.join(__dirname, 'public');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(assetsPath));

const links = [
  { href: '/', text: 'Home' },
  { href: 'about', text: 'About' },
];

const users = ['Rose', 'Cake', 'Biff'];
app.get('/', (req, res) => {
  res.render('index', { links, users });
});
app.get('/about', (req, res) => {
  res.render('about', { links });
});

app.listen(3000, () => {
  console.log('    app is listening at port: localhost:3000');
});
