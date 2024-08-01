const jwt = require("jsonwebtoken");

const userAuthentication = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const tokensplit = token.split(" ")[1];

    const tokenverfied = jwt.verify(
      tokensplit,
      process.env.JWT_TOKEN_SECRETKEY
    );

    req.user = {
      _id: tokenverfied._id,
    };

    next();
  } catch (error) {
    res.status(401).json("User not Authorized")
  } 
};

module.exports = { userAuthentication };
