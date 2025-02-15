require('dotenv').config()
const axios = require('axios')

exports.getWeatherByCity = async (req, res) =>{
    const city = req.params.city

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`;

    try {
        const response = await axios.get(url)
        const weatherData = response.data

        res.json({
            city: weatherData.name,
            temperature: weatherData.main.temp,
            feels_like: weatherData.main.feels_like,
            condition: weatherData.weather[0].description
            })

    } catch (err){
        res.status(500).json({error: 'Error fething the weather data'})
    }
}


