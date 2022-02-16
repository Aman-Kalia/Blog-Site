const router =require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrupt = require('bcrypt');

//UPDATE
router.put('/:id',async(req,res)=>{
    if(req.body.userId===req.params.id){
        if(req.body.password){
            const salt = await bcrupt.genSalt(10);
            req.body.password=await bcrupt.hash(req.body.password,salt);

        }
        try{
            const updateUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new:true});
            res.status(200).json(updateUser);
        
        }
        catch(err){
            res.status(500).json(err);
            // console.log(err);
        }
    }
    else{
        //401 means you are not allow to update
        res.status(401).json("You can update only your account!")
    }
    
})

//DELETE
router.delete('/:id',async(req,res)=>{
    if(req.body.userId===req.params.id){
        try{
            const user = await User.findById(req.params.id);
            try{
                await Post.deleteMany({usename:user.usename});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted");
            
            }
            catch(err){
                res.status(500).json(err);
                // console.log(err);
            }

        }
        catch(err){
            //404 means user not found
            res.status(404).json("User not found!")
        }
        
    }
    else{
        //401 means you are not allow to update
        res.status(401).json("You can delete only your account!")
    }
    
})

//GET
router.get('/:id', async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others}=user._doc;
        res.status(200).json(others);

    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;