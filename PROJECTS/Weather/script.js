document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input")
    const getWeatherBtn = document.getElementById("get-weather-btn")
    const weatherInfo = document.getElementById("weather-info")
    const cityNameDisplay = document.getElementById("city-name")
    const temperatureDisplay = document.getElementById("temperature")
    const descriptionDisplay = document.getElementById("description")
    const errorMessage = document.getElementById("error-message")

    const API_KEY = "1775a7c7864724b93e1a5d0f47691702"

    getWeatherBtn.addEventListener('click', async () => {
        const cityName = cityInput.value.trim()
        if(!cityName) return

        // It may throw an erro
        // Server/database is always in another continent
        try {
            const weatherData = await fetchWeatherData(cityName)
            displayWeatherData(weatherData)
        } catch (error) {
            showError()
        }

    })

    async function fetchWeatherData(city) {
        // Gets the data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

        const response = await fetch(url)
        console.log(typeof response);
        console.log("RESPONSE", response);

        if (!response.ok) {
            throw new Error("City now Found!")
        }

        const data = await response.json()
        return data
        
    }

    function displayWeatherData(data) {
        // Displays the data
        console.log(data);
        const { name, main, weather } = data
        cityNameDisplay.textContent = name
        temperatureDisplay.textContent = `Temperature: ${main.temp}`
        descriptionDisplay.textContent = `Weather: ${weather[0].description}`
        
        // Unlock the display
        weatherInfo.classList.remove('hidden')
        errorMessage.classList.add('hidden')

    }

    function showError() {
        weatherInfo.classList.add('hidden')
        errorMessage.classList.remove('hidden')
    }
})