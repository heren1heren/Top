const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('usernames will be logged here - wip');
  res.send("my bad I didn't write res.send");
});
app.get('/new', (req, res) => {
  res.send(` <form action="#" method="post">
        <label for="inputField">Enter something:</label>
        <input type="text" id="inputField" name="inputField" required>
        <button type="submit">Submit</button>
    </form>`);
});
app.post('/new', (req, res) => {
  console.log('username to be saved: ', req.body.username);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
