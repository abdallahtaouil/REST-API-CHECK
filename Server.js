// Importing the 'express' library and assigning it to the constant 'express'
const express=require ('express')
// Importing the 'connectDB' function from the 'Config' file
const connectDB = require('./Configuration/Config')
// Importing the 'userrouter' from the 'Router' file
const userrouter = require('./Router/Router')
// Creating a web server using Express and storing it in the variable 'app'
const app=express()
const port=7777
//accept requests with type json 
app.use(express.json())
// Connecting to the database using the 'connectDB' function
connectDB()
// Using the 'userrouter' for handling routes starting with '/user'
app.use('/user',userrouter)
// Starting the server to listen on the specified port and logging a message
app.listen(port,console.log('lets coding backend'))