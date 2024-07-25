const express = require('express');
require('dotenv').config();
const {databaseConnection} = require('./db/database');
const userRouter = require('./routes/userRouter');
const cors = require('cors');
const cookieParser = require('cookie-parser');



const app = express();
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit:"16kb"}));
app.use(express.static("public"));
app.use(cors());
app.use(cookieParser())

//Routers
app.use("/api/user",userRouter);


databaseConnection().then(()=>{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log("server running on port:",process.env.PORT);
    });
})
.catch((err)=>{
    console.log("Mongo db connection failed!",err);
});  


