const express=require('express')
const { createuser, getuser, deleteuser, updateuser } = require('../Controller/Controller')
const userrouter=express.Router()
userrouter.post('/create',createuser);
userrouter.get('/get',getuser)
userrouter.delete('/delete/:id',deleteuser)
userrouter.put('/update/:id',updateuser)
module.exports=userrouter