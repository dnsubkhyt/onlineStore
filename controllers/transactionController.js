const Transaction = require('../models/transactionModel')
const User = require('../models/userModel')
const Product = require('../models/productModel')
const mongoose = require('mongoose')
const {validateTransactionSchema} = require('../config/joi')

exports.createTransaction = async (req, res) => {
    const { userId, productId, quantity } = req.body;
    
    const {error} = validateTransactionSchema(req.body)
    if (error) return res.status(400).json({message: error.details[0].message})

    try {

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });
        
        const product = await Product.findById(productId);
        if (!product)return res.status(404).json({ message: 'Product not found' });
        
        if (product.stock < quantity) {
            return res.status(400).json({ message: 'Not enough stock available' });
        }

        const totalPrice = product.price * quantity;

        const transaction = new Transaction({
            userId,
            products: [productId],
            orderStatus: true,
            totalPrice,
            createdAt: new Date(),
        });

        await transaction.save();

        user.purchase_history.push(transaction._id);
        await user.save();

        product.stock -= quantity;
        await product.save();

        res.status(200).json({ message: 'Order placed successfully', transaction });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Server error' });
    }
};