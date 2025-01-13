const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/about-me', (req, res) => res.send('Hello, world!')); // change this one with html file and we are done !!!

app.get('/meIsChanging', (req, res) => res.send('Hello, world!'));

app.get('/meJustRealizeSomethingThatMakeMeHappier', (req, res) =>
  res.send('Hello, world!')
);
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
