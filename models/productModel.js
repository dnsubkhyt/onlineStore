const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true},
    stock: { type: Number, required:true, min: 0},
    category: { type: [String]},
    description: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
  }, { versionKey: false });

const product = mongoose.model('product', productSchema)

module.exports = product