// Set up MySQL connection.
require("dotenv").config();
const mysql = require('mysql');

console.log(process.env.SQLKEY);

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.SQLKEY,
  // password: process.env.SQLKEY,
  // password: `MySQL2019!!`,
  database: 'burgers_db'
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;