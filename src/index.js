const express = require('express');
require('dotenv').config();
const {databaseConnection} = require('./db/database');

const app = express();
app.use(bodyParser.json());


databaseConnection();

app.post('/register', function (req, res) {
    res.send(req.body);
  })
  
app.listen(process.env.PORT || 3000);

