var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "145.131.29.106",
  user: "robinDB",
  password: "S10732b54861!",
  database: "dashboard",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function (err, rows, fields) {
  if (err) throw err;

  console.log("The solution is: ", rows[0].solution);
});
