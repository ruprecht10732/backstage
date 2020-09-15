const mysql = require("mysql2");
const db = require("./app/db/db_connect");
const bodyParser = require("body-parser");
const path = require("path");

const moment = require("moment");
moment().format();

const express = require("express"),
  app = express(),
  port = process.env.PORT || 5050;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); //Parse URL-encoded bodies

app.get("/verdiensten/toevoegen/:id", (req, res) => {
  let sql = `SELECT verdiensten.*, medewerkers.* FROM verdiensten INNER JOIN medewerkers ON medewerkers.medewerker_ID=verdiensten.medewerker_ID WHERE DATE(timestamp) = CURDATE()`;
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

app.get("/verdiensten", (req, res) => {
  let sql =
    "SELECT verdiensten.*, medewerkers.* FROM verdiensten INNER JOIN medewerkers ON medewerkers.medewerker_ID=verdiensten.medewerker_ID";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

app.get("/verdiensten/:id", function (req, res) {
  let sql =
    "SELECT verdiensten.*, medewerkers.* FROM verdiensten INNER JOIN medewerkers ON medewerkers.medewerker_ID=verdiensten.medewerker_ID WHERE verdiensten.medewerker_ID=?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

app.get("/medewerkers", (req, res) => {
  let sql =
    "SELECT vestiging_naam, medewerkers.* FROM vestigingen INNER JOIN medewerkers ON medewerkers.vestiging_ID=vestigingen.vestiging_ID";
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

app.get("/medewerkers/:id", function (req, res) {
  let sql = "SELECT * FROM medewerkers WHERE medewerker_ID=?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

app.put("/adres", function (req, res) {
  let sql =
    "UPDATE medewerkers SET Straat=?, Huisnummer=?, Toevoeging=?, Postcode=?, Woonplaats=? WHERE medewerker_ID=?";
  db.query(
    sql,
    [
      req.body.straat,
      req.body.huisNummer,
      req.body.huisNummerToevoeging,
      req.body.postCode,
      req.body.woonPlaats,
      req.body.medewerkerID,
    ],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    }
  );
});

app.put("/document", function (req, res) {
  let sql = "UPDATE medewerkers SET DocumentNummer=? WHERE medewerker_ID=?";
  db.query(
    sql,
    [req.body.documentnummer, req.body.medewerkerID],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    }
  );
});

app.put("/noodcontact", function (req, res) {
  let sql =
    "UPDATE medewerkers SET NoodGevalNaam=?, NoodGevalNummer=?  WHERE medewerker_ID=?";
  db.query(
    sql,
    [req.body.noodNaam, req.body.noodNummer, req.body.medewerkerID],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    }
  );
});

app.put("/persoonlijk", function (req, res) {
  const date = new Date(req.body.geboortedatum);
  let sql =
    "UPDATE medewerkers SET Naam=?, AchterNaam=?, GeboorteDatum=?, Nationaliteit=?, Email=?, Mobiel=?, Geslacht=?, IBAN=? WHERE medewerker_ID=?";
  db.query(
    sql,
    [
      req.body.naam,
      req.body.achternaam,
      moment(req.body.geboortedatum).format("YYYY/MM/DD"),
      req.body.nationaliteit,
      req.body.email,
      req.body.mobiel,
      req.body.geslacht,
      req.body.iban,
      req.body.medewerkerID,
    ],
    (err, result) => {
      if (err) {
        throw err;
        console.log(result);
      }
      res.send(result);
      console.log(result);
    }
  );
});

app.put("/medewerkers", (req, res) => {
  const date = new Date(req.body.GeboorteDatum);
  let sql =
    "UPDATE medewerkers SET Naam=?, Achternaam=? , GeboorteDatum=?, Email=?, Mobiel=?, Straat=?, Huisnummer=?, Toevoeging=?, Postcode=?, Woonplaats=? WHERE medewerker_ID=?";
  db.query(
    sql,
    [
      req.body.Naam,
      req.body.Achternaam,
      date,
      req.body.Email,
      req.body.Mobiel,
      req.body.Straat,
      req.body.Huisnummer,
      req.body.Toevoeging,
      req.body.Postcode,
      req.body.Woonplaats,
      req.body.id,
    ],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result);
    }
  );
});

app.listen(port);
