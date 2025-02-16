const Product = require('../models/productModel')
const {validateProductSchema} = require('../config/joi')


exports.createProduct = async (req, res) => {
    const {name, price, stock, category, description} = req.body

    const productIn = {name, price, stock, category, description}
    const {error} = validateProductSchema(productIn)

    if(error) return res.status(400).json({message: error.details[0].message})

    try{
        const newProduct = new Product({
            name, 
            price, 
            stock,
            category,
            description,
            createdAt: Date.now()
        })

        await newProduct.save()
        console.log("✅ Product added successfully:", newProduct);
        res.status(201).json({ message: 'Product added successfully!', product: newProduct });

    }
    catch(err){

    }

}

exports.getAllProducts = async (req, res) => {
    try{
        const products = await Product.find({})
        if(products.length === 0 ) return res.status(404).json({message: "No Product found"})

        res.status(200).json({products})    
    }
    catch (err){
        res.status(500).json({message: 'error', err})
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const _id= req.params.id
        if(!_id) return res.status(404).json({message: 'Provide the product ID'})
        
        const product = await Product.findOne({_id})
        if (!product) return res.status(404).send({message: 'Such product does not exist in our system'})
        
        Object.assign(product, req.body)
        
        await product.save()
        res.status(200).send({message: 'Product updated successfully!'})
        } catch(error) {
            res.status(500).json({message: 'Error updating book: ', error: error})
        }
}


