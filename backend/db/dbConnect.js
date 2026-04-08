const mongoose=require('mongoose');
const dbConnect=()=>{
    mongoose.connect('mongodb://localhost:27017/ecommerce').then(()=>{
        console.log('Connected to MongoDB');
    }).catch((err)=>{
        console.log('Error connecting to MongoDB',err);
    });
}
module.exports=dbConnect;