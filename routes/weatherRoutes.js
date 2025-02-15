const express = require('express')
const router = express.Router()
const weatherController = require('../controllers/weatherController')

router.get('/:city', weatherController.getWeatherByCity)

router.get('/', (req, res) => {
    res.sendFile(__dirname + '../public/weather.html');
  });

module.exports = router