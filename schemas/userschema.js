const mongoose= require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name:{
      type:String,
      required:true,
  }, // String is shorthand for {type: String}
  email: {
      type:String,
      required:true
  },
  password:{
    type:String,
      required : true,
      
  },
  role:{
    type:String,
      required:true,
     
  }
});
module.exports = userSchema;
