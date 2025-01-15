const pool = require('./pool');

async function getAllUsernames() {
  const { rows } = await pool.query('SELECT * FROM usernames');
  return rows;
}
async function insertUsername(username) {
  //! never use this:
  //! await pool.query("INSERT INTO usernames (username) VALUES ('" + username + "')");
  await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);
}
module.exports = {
  getAllUsernames,
  insertUsername,
};
