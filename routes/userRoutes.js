
const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/auth')

router.post('/signup', userController.signup)

router.post('/login', userController.login)

router.get('/me', authMiddleware, userController.getUserInfo)

router.delete('/me', authMiddleware, userController.closeAccount )

module.exports = router