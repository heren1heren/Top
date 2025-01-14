const { Router } = require('express');

const bookRouter = Router();

bookRouter.get('/', (req, res) => res.send('All books'));
bookRouter.get('/:authorId', (req, res) => {
  const { authorId: bookId } = req.params;
  res.send(`book ID: ${bookId}`);
});

module.exports = bookRouter;
