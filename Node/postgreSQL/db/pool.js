const { Pool } = require('pg');
require('dotenv').config();

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
//! do not upload this
module.exports = new Pool({
  connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@localhost:5432/top_users`,
});
