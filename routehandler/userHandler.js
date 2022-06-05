const mongoose= require('mongoose');
const express = require("express");
const dotenv= require("dotenv");
dotenv.config();
const router = express.Router();
const jwt = require("jsonwebtoken");
const userSchema = require("../schemas/userschema");
const User = new mongoose.model("User",userSchema);
router.post("/signup",async(req,res)=>{
    try{
        const newUser = new User(
            {
                name :req.body.name,
                email : req.body.email,
                password : req.body.password,
                role: "user"
                
            }
            
    );
    await newUser.save();
    res.status(200).json({
        message:"signup was successfull",
    
    });
    console.log(req.body);

 }
catch{
    // res.status(500).json({
    //     message:"signup failed"
    // })

    console.log("failed");
}


})

router.post("/login",async(req,res)=>{
    try{
        await User.find({email:req.body.email,password:req.body.password}).then(
            result=>{
                   const token = jwt.sign({
                   email : result[0].email,
                   userRole : result[0].role
            
               },process.env.JWT_SECRET,{
                   expiresIn : '1h'}
                   
        );
        res.send({token});
        
        
               })
               

               
//     if(user && user.length>0){
//         const pw = await req.body.password;
        
// if(pw == user[0].password){
//     console.log(pw);
  

    
//    });
//    console.log(email,userId);
//    console.log("login successfull");
//    console.log(pw);
// }else{
//     console.log("password not mach");
// }
//     }else{
//         console.log("failed");
//     }


    }
    catch{
        (err)=>{
            console.log(err);
        }
    }
})


router.post("/cart-data",async(req,res)=>{
    console.log(req.body);
})

module.exports = router;