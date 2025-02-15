const mongoose = require('mongoose')
require('dotenv').config()

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log(`Connected to MongoDB`))
=======
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
>>>>>>> 648a903b84d09fd17f3778bfeb9ca77ab42c0f00
.catch((err) => console.error('MongoDB connection error', err))

module.exports = mongoose
