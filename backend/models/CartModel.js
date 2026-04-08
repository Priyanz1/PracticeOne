const mongoose=require('mongoose');

const CartSchema=mongoose.Schema({
   ProductId:{
     type:String,
     required:true
   },
   Quantity:{
    type:Number,
    default:1
   }
})

const Cart=mongoose.Model('Cart',cartSchema);
module.exports = Cart;