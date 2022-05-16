const express=require('express');
const User = require('../models/User');
const router=express.Router()
const { body, validationResult } = require('express-validator');


router.post( '/',

[
    body('name','Atleast 3 character required in Name').isLength({min :3}),
    body('email','Invalid email').isEmail(),
    body('password','Password should be atleast of length 8').isLength({min :8})
],(req,res)=>{
console.log(req.body);
const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors : errors.array()});
}
User.create({
    name: req.body.name,
    password: req.body.password,
    email : req.body.email
  }).then(user => res.json(user)).catch((err)=>{
        res.json({errors : 'Please enter another value for email. This email is already registered'});
  });
// res.send("Received");
});
module.exports=router