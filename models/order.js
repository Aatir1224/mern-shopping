const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    products:[ProductCartSchema],
    transaction_id:{

    },
    amount:{
        type:Number
    },
    address:{
        type:String,
    },
    updated:{
        type:Date
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true
})

const Order = mongoose.model("Order",orderSchema);
module.exports = Order;