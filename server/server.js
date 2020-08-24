let mysql = require("mysql");
let config = require("./app/db/db_connect");

var express = require("express"),
  app = express(),
  port = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.send("!");
});

app.get("/charmain", (req, res) => {
  res.send("Hallo Liefje");
});

console.log("todo list RESTful API server started on: " + port);

let connection = mysql.createConnection(config);

let sql = `SELECT * FROM Medewerkers`;
connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

connection.end();

app.listen(port);
