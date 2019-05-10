// Set up MySQL connection.
require("dotenv").config();
const mysql = require('mysql');

// console.log(process.env.SQLKEY);

const connection = mysql.createConnection({
  host: 'gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    // host: 'localhost',
  port: 3306,
  user: 'bapkuhsth3xu7h97',
  // user: 'root',
  // password: process.env.SQLKEY,
  password: process.env.SQLKEY,
  // password: process.env.SQLKEY,
  // password: `MySQL2019!!`,
  // database: 'burgers_db'
  database: 'ikxvk1qp0im4o7dh'
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