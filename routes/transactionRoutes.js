const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transactionController')

router.post('/placeOrder', transactionController.createTransaction)
module.exports = router
