require('dotenv').config();
const {databaseConnection} = require('./db/database');


databaseConnection();

