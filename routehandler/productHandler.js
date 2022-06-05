const mongoose= require("mongoose");
const ObjectId = require('mongodb').ObjectId;
const express = require("express");
const productSchema=require("../schemas/productSchema");
const router = express.Router();
const auth= require("../middleware/auth");
const products = new mongoose.model('Products',productSchema);
router.post("/add-products",auth,async(req,res)=>{
  try{
      const newProduct = new products({
          category:req.body.category,
          imgUrl : req.body.imgUrl,
          description:req.body.description,
          price:req.body.price

      }
    );
      await newProduct.save().then(result=>{
        res.send(result);
      })
  
      console.log(req.body);
  }
catch{
      (err)=>{
          console.log(err);
      }
  }

})


router.get('/add-products',auth,async(req,res)=>{
  try{
    const cursor=await products.find({});
    res.send(cursor);
  }
  
  catch{
    console.log("error");
  }
 
})

router.post('/delete-products',auth,async(req,res)=>{
  console.log(req.body);
  await products.deleteOne({_id:req.body.id}).then((result)=>{
    res.send(result)
  })
  .catch(err=>{
  console.log(err);
  }
  )

})

router.post("/update-products",auth,(req,res)=>{
    console.log(req.body);
    res.send({msg:"ok"});
})



module.exports = router;