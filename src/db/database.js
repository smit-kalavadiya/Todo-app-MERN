const mongoose = require('mongoose');

const databaseConnection=async()=>{
    try {
        const con = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DATABASE_NAME}`);
        console.log(`Database connected:${con.connection.host}`);
    } catch (error) {
        console.log(`Database connection error: ${error}`);
    }
}

module.exports = {databaseConnection};