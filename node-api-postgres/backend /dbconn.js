const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: 'Letsdoit!',
  port: 5432,
});

module.exports = pool;
