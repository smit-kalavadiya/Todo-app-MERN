const userAuthentication=(res,req,next)=>{
    console.log("From User Auth");
    next();
}

module.exports = {userAuthentication}