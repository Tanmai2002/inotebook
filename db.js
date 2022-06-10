const mongoose =require('mongoose');
const mongoURI=process.env.mongodb;

const connetToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo.")
    });
}

module.exports=connetToMongo;