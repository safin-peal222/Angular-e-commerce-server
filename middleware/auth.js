const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
// const config = process.env;
const verifyToken = (req,res,next)=>{
    //let token = req.headers.authorization.split('.')[1];
    const token = req.headers.authorization;
    //console.log(token);
    if(!token){
        console.log("not authorized");
        return res.status(401).send("unatho");
    }else if(token ==='null'){
        console.log("unauthor");
        return res.status(401).send("unathor");
        
    }
    try{
        const decoded= jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded.email);
        req.user= decoded;
        return next();
    }catch(err){
        console.log(err);
        res.send(err);
    }


}

module.exports=verifyToken;