const mongoose=require('mongoose');
const CONNECTION_STRING='mongodb+srv://admin:admin@cluster0.onlcjxb.mongodb.net/node-app?retryWrites=true&w=majority';

const connectDb= async function(){
    try{
    const connect=await mongoose.connect(CONNECTION_STRING);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDb;