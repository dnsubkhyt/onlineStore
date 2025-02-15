const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController')
const path = require('path')

router.get('/book/:id', bookController.getBookbyId)
router.get('/', bookController.getAllBooks)

router.post('/book/add', bookController.addBook)
router.put('/book/update/:id', bookController.updateBook)
router.delete('/book/delete/:id', bookController.deleteBook)


module.exports = router