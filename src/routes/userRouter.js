const express = require("express");
const router = express.Router();

const {userAuthentication} = require("../middlewares/userauth.middlewares");
const {userLogin,userRegister,userProfile} = require("../controllers/user.controller");


// Define a route
router.post("/register",userRegister)

router.post("/login",userLogin)

router.post("/profile",userAuthentication,userProfile)

module.exports = router;
