const express = require('express');
const app = express();
const usersRouter = require('./routes/usersRouter');
const bodyParser = require('body-parser');
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use('/', usersRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
