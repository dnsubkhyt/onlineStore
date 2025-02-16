const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.post('/add', productController.createProduct)

router.get('/getProducts', productController.getAllProducts)

router.put('/update/:id', productController.updateProduct)

module.exports = router