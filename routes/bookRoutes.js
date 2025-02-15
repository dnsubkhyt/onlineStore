const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController')
const path = require('path')

router.get('/:id', bookController.getBookbyId)
router.get('/', bookController.getAllBooks)

router.post('/add', bookController.addBook)
router.put('/update/:id', bookController.updateBook)
router.delete('/delete/:id', bookController.deleteBook)


module.exports = router