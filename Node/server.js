const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello, world!'));
app.get('/aFile', (req, res) => {
  res.sendFile('/home/heren/Coding/Top/Node/200.webp');
});
app.get('/:username/something', (req, res) => {
  console.log(req.params);
  res.end();
});
app.get('*', (req, res) => {
  res.send(
    '* is a great way to catch all otherwise unmatched paths, e.g. for custom 404 error handling.'
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
