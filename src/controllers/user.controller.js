const userSchema = require("../models/user.model");
const bcrypt = require("bcryptjs");


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
    
        res.status(200).send(user);
    
      } catch (error) {
            res.send("wrong details");
      }
}

const userRegister = async (req,res) => {
  const user = new userSchema(req.body);
  user.save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
}


module.exports = {
    userLogin,
    userRegister
}