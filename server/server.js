const bodyParser = require("body-parser");
const path = require("path");
const models = require("./app/sequelize.js");

//Database
const db = require("./app/config/database.js");

// Test DB

db.authenticate()
  .then(() => console.log("Database is working...."))
  .catch((err) => console.log(err));

const express = require("express"),
  app = express(),
  port = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.send("INDEX");
});

app.use("/users", require("./app/routes/user.routes"));
app.use("/roles", require("./app/routes/role.routes"));

app.listen(5050, () => {
  console.log("App listening on port 5050!");
});
