const express = require('express');
const path = require('node:path');
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const links = [
  { href: '/', text: 'Home' },
  { href: 'about', text: 'About' },
];
app.get('/', (req, res) => {
  res.render('index', { links });
});

app.listen(3000, () => {
  console.log('    app is listening at port: localhost:3000');
});
