const mongoose=require("mongoose")


const userScheam=new mongoose.Schema({
  Name:{
    type:String,
    required:[true,"Name is required"],
    minlength:2,
    maxlength:15

  },
  price:{
    type:Number,
    required:[true,"price is required"]
  },
  date:{
    type:Date,
    required:[true,"date is required"]
  },
  brand:{
    type:String,
    required:[true,"brand is required"]
  }
 
})
const Item=new mongoose.model("Item",userScheam)
module.exports=Item