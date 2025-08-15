const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static('public'));
app.use(express.json());

const API_KEY = process.env.OPENWEATHER_API_KEY;

app.post('/weather', async (req, res) => {
    const city = req.body.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        const data = {
            city: response.data.name,
            temp: response.data.main.temp,
            description: response.data.weather[0].description,
            icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        };
        res.json(data);
    } catch (error) {
        res.status(404).json({ error: "City not found" });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
