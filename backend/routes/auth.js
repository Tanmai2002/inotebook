const express=require('express');
const User = require('../models/User');
const router=express.Router()
const { body, validationResult } = require('express-validator');

//POST request to create user . No login required
router.post( '/createUser',
[
    body('name','Atleast 3 character required in Name').isLength({min :3}),
    body('email','Invalid email').isEmail(),
    body('password','Password should be atleast of length 8').isLength({min :8})
],async (req,res)=>{
    try{
const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors : errors.array()});
}
let user= await User.findOne({email : req.body.email});
if(user){
    return res.status(400).json({error : "Email already registered."});
}

 user =await User.create({
    name: req.body.name,
    password: req.body.password,
    email : req.body.email
  });
  res.json({status :"User successfully created"});
  
}catch(error){
    console.log(error);
}
// res.send("Received");
});
module.exports=router