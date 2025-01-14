const express = require('express');
const path = require('node:path');

const app = express();
const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
