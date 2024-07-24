const express = require('express');
require('dotenv').config();
const {databaseConnection} = require('./db/database');

const app = express();

databaseConnection();

app.get('/', function (req, res) {
    res.send('Hello World');
  })
  
app.listen(process.env.PORT || 3000);

