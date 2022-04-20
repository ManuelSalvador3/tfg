const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tfg',
  password: '5000',
  port: 5432,
});

module.exports = pool;