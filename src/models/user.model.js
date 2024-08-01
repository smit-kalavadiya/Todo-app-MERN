const mongoose = require('mongoose');
const becrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema(
    {
        fname:{
            type:String,
            required: [true, 'Please add a first name'],
        },
        lname:{
            type:String,
            required: [true, 'Please add a last name'],
        },
        email:{
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
        },
        password:{
            type:String,
            required: [true, 'Please add a password'],
        }
    },
    {
        timestamps: true,
    }
)

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();

    const hashedPassword = await becrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
})

module.exports = mongoose.model('User',userSchema);