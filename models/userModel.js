const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    address: {type: String},
    purchase_history: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'transaction'
    }],
    createAt: {type: Date, default:Date.now}
})

const userModel = mongoose.model('user', userSchema)

module.exports  = userModel