const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = require("../models/user.model");
const {userAuthentication} = require("../middlewares/userauth.middlewares");
const {userLogin,userRegister} = require("../controllers/user.controller");
const router = express.Router();

// Define a route
router.post("/register",userRegister)

router.post("/login",userAuthentication,userLogin)

module.exports = router;
