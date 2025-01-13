const db = require('../db');
const CustomNotFoundError = require('../errors/CustomNotFoundError');

// define the middleware

async function getAuthorById(req, res) {
  console.log(db);
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError('author not found');
  }
  res.send(`Author Name: ${author.name}`);
}

module.exports = { getAuthorById };
