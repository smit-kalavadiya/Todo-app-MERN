const express = require('express');
require('dotenv').config();
const {databaseConnection} = require('./db/database');
const userRouter = require('./routes/userRouter')

const app = express();
app.use(express.json())

//Routers
app.use("/api/user",userRouter);


databaseConnection();  
app.listen(process.env.PORT || 3000);

