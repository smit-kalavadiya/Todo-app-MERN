const express = require('express');
const mongoose = require('mongoose');
const userSchema = require('../models/user.model');
const router = express.Router();

// Define a route
router.post('/register', (req, res) => {
    
    const userd = new userSchema(req.body);
    userd.save().then(()=>{
        res.status(201).send(userd);
    }).catch((e)=>{
        res.status(400).send(e);
    })

});

router.get('/', (req, res) => {
    res.send("user router");
});

module.exports = router;