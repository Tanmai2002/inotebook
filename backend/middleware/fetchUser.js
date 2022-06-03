
const JWTSecret='tanmaiINote';
let jwt= require('jsonwebtoken')
const fetchUser=(req,res,next)=>{
    //Get user from jwt token and add id to req object
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({error :'Please authenticate using valid token'})
    }
    try {
        const data=jwt.verify(token,JWTSecret);
        req.user=data.user;
    } catch (error) {
        
        res.status(401).send({error :'Please authenticate useing valid token'})
    }

    next();
}
module.exports= fetchUser;

