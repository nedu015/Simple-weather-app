// Add your OpenWeatherMap API key here
const apiKey = "52c0d030fd5ea0859b39843852a5b11f"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;



// Add event listener to search button
const searchButton = document.getElementById('searchBtn');
searchButton.addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    getWeather(location);
});
 



async function getWeather(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City name not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}




function displayWeather(data) {
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');

    cityName.textContent = `Weather in ${data.name}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = `Description: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    document.querySelector('#weatherDetails').style.display = 'block';
}
