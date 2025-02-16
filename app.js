const express = require('express');
const app = express();
require('dotenv').config()
const axios = require('axios')
require('./config/mongoose');
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const transactionRoutes = require('./routes/transactionRoutes')

app.get('/', (req, res) => {
  res.send('Welcome to My Online Store API!');
})

app.use(express.json());
app.use('/user',userRoutes)
app.use('/product',productRoutes)
app.use('/transaction', transactionRoutes)

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

