const mongoose= require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema({
    category:{
        type:String,
        required:true
    },
    
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    imgUrl:{
        type:String,
        rquired:true
    }

})

module.exports= productSchema;