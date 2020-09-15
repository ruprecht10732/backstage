const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Role = require("../models/role.model");

router.get("/", (req, res) =>
  Role.findAll()
    .then((role) => {
      console.log(role);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

module.exports = router;
