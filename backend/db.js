const mongoose =require('mongoose');
const mongoURI='mongodb://localhost:27017/inotebook?directConnection=true';

const connetToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo.")
    });
}

module.exports=connetToMongo;