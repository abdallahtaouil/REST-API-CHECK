//establishing a connection to a MongoDB database using the Mongoose library.
const mongoose=require('mongoose')
const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/WS')
        console.log('data base is connected')
    } catch (error) {
        console.log('error')
    }
}
module.exports=connectDB