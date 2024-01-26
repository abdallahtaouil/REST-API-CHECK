const users=require('../Model/Model')
exports.createuser=async(req,res)=>{
try {
    const user=new users(req.body)
    await user.save()
    res.status(200).send({message:'users has been created',user})
} catch (error) {
    res.status(500).send({message:'user creation has failed'})
}
}
exports.getuser=async(req,res)=>{
    try {
        //get  the collection(thearray of lists)
        const all_user= await users.find()
        //pass it to the key 'all_users'
        res.status(200).send({message:'users',all_users:all_user})//res.data used in payload
    } catch (error) {
        res.status(500).send({message:"users can't be found",error})
    }
}
exports.deleteuser=async(req,res)=>{
    const id=req.params.id
    try {
        
        const deleted_user= await users.findByIdAndDelete(id)
        
        res.status(200).send({message:'users has been deleted',deleted_user:deleted_user})
    } catch (error) {
        res.status(500).send({message:"users can't be deleted",error})
    }
}
exports.updateuser=async(req,res)=>{
    const id =req.params.id
    try {
        const updated_user=await users.findByIdAndUpdate(id,{$set:req.body})
        res.status(200).send({ message: "User has been updated!", user_update: updated_user });
    } catch (error) {
        
        res.status(500).send({ message: "User has failed to update!" });

        
    }
}