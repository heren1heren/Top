const express = require('express');
const path = require('node:path');
const app = express();
const assetsPath = path.join(__dirname, 'public');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(assetsPath));

app.get('/', (req, res) => {
  res.render('index', { links, users });
});
app.get('/new', (req, res) => {
  res.send('hi');
});

app.listen(3000, () => {
  console.log('    app is listening at port: localhost:3000');
});
