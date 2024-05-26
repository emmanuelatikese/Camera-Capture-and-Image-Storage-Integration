const sql = require("mysql");

const db = sql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '442emma',
  database : 'emma'
});

module.exports = db;