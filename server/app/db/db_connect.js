const mysql = require("mysql");

// Get the Host from Environment or use default
const host = process.env.DB_HOST || "localhost";

// Get the User for DB from Environment or use default
const user = process.env.DB_USER || "robinDB";

// Get the Password for DB from Environment or use default
const password = process.env.DB_PASS || "S10732b54861!";

// Get the Database from Environment or use default
const database = process.env.DB_DATABASE || "dashboard";

// Create the connection with required details
const db = mysql.createConnection({
  host,
  user,
  password,
  database,
});

// make to connection to the database.
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("successfully connected to DB");
});

module.exports = db;
