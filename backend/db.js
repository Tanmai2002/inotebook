const mongoose =require('mongoose');
const mongoURI='mongodb://localhost:27017/';

const connetToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo.")
    });
}

module.exports=connetToMongo;