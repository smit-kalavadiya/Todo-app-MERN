const express = require('express');
const router = express.Router();

// Define a route
router.post('/register', (req, res) => {
    res.send(req.body);
});

router.get('/', (req, res) => {
    res.send("user router");
});

module.exports = router;