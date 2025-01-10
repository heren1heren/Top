const db = require("../db");

// define the middleware

async function getAuthorById(req, res) {
    console.log(db)
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));

  if (!author) {
    res.status(404).send("Author not found");
    return;
  }
  res.send(`Author Name: ${author.name}`);
};

module.exports = {getAuthorById};


async function asyncHandler(cb) {
    try {

    } catch(cb.error) 
}