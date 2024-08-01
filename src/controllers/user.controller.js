const userSchema = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userLogin = async (req, res) => {
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

        const token = jwt.sign({_id:user._id},process.env.JWT_TOKEN_SECRETKEY,{expiresIn: "1d"});
    
        res.status(200).json({
          status: true,
          message:"User logged in",
          data:{
            accessToken: token,
            userId: user._id
          }

        });
    
      } catch (error) {
            res.send("wrong details");
      }
}

const userRegister = async (req,res) => {
  const user = new userSchema(req.body);
  user.save()
    .then(() => {
      user.password = undefined;
      res.status(201).json({
        status: true,
        message:"User created"
      });
    })
    .catch((e) => {
      res.status(400).json({
        status: false,
        message:"User not created"
      });
    });
}

const userProfile = async (req,res) => {
  const userId = req.user._id

  const user = await userSchema.findById(userId);
  
  if(!user) return res.status(404).send("User not found")

    user.password = undefined;
    res.status(200).send(user);
}

module.exports = {
    userLogin,
    userRegister,
    userProfile
}