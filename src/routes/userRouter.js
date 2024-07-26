const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = require("../models/user.model");
const router = express.Router();

// Define a route
router.post("/register", (req, res) => {
  const user = new userSchema(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body; // STEP 1
    let user = await userSchema.findOne({ email }); //STEP 2
    if (!user) {
      return res.send("Invalid email address");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
        return res.send("Wrong password");
    }
    res.send(user);
  } catch (error) {
        res.send("wrong details");
  }
});

module.exports = router;
