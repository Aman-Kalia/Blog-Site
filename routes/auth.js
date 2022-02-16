const router =require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//Regsiter
router.post('/register',async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashPass= await bcrypt.hash(req.body.password,salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashPass
            // password:hashPass,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
        // console.log(err);
    }
})

//LOGIN
router.post('/login',async(req,res)=>{
    try{
        const user= await User.findOne({
            username:req.body.username
        });
        !user&& res.status(400).json("Wrong Credentials");
        // const validateduser = await bcrypt.compare(req.body.username, user.username);
        const validatedpass = await bcrypt.compare(req.body.password, user.password);
        // !validateduser && res.status(400).json("Wrong username");
        !validatedpass && res.status(400).json("Wrong Password");
        
        //user._doc will get the user relevant info expect password
        const {password, ...others}=user._doc;

        res.status(200).json(others);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;