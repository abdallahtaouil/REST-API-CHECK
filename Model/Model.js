const mongoose=require('mongoose')
// Defining a user schema using the 'mongoose.Schema' method
const userschema=new mongoose.Schema({
    name:{type:String,required:true},
    age:Number,
    heigth:Number,
    weigth:Number,
    image:String
},{timestamps:true})
// Creating and exporting a 'users' model based on the defined schema
module.exports=mongoose.model('users',userschema)