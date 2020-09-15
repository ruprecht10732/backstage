const express = require("express");
const router = express.Router();
const db = require("../config/database");
const User = require("../models/user.model");
const UserController = require("../controllers/user.controller");

module.exports = router;
