// Function to get weather data from the OpenWeatherMap API
function getWeather() {
  const apiKey = "eed9e24093db9fab5e6533aafd084294";
  const cityInput = document.getElementById("city-input");
  const cityName = cityInput.value.trim();

  if (cityName !== "") {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const weatherResult = document.getElementById("weather-result");
        if (data.cod === 200) {
          const weatherDescription = data.weather[0].description;
          const temperature = data.main.temp;
          const humidity = data.main.humidity;
          const windSpeed = data.wind.speed;
          const cityName = data.name;

          const weatherText = `
                        <p><strong>Weather:</strong> ${weatherDescription}</p>
                        <p><strong>Temperature:</strong> ${temperature}°C</p>
                        <p><strong>Humidity:</strong> ${humidity}%</p>
                        <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
                        <p><strong>City Name:</strong> ${cityName}</p>
                    `;

          weatherResult.innerHTML = weatherText;
        } else {
          weatherResult.textContent = "Weather data not found.";
        }
      })
      .catch((error) => {
        console.log(error);
        const weatherResult = document.getElementById("weather-result");
        weatherResult.textContent =
          "An error occurred while fetching weather data.";
      });

    cityInput.value = "";
  }
}
