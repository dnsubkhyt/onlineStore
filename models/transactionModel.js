const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'user', 
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'product',
        required:true
    }],
    orderStatus: {type: Boolean},
    totalPrice: {type: Number},
    createdAt: {type: Date, default:Date.now}
})

const transactionModel = mongoose.model('transaction', transactionSchema)

module.exports  = transactionModel