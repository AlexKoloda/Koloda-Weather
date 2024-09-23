const api = {
    key: '3f16fd4f6fec3624c34a5bad5ee35a00',
    base: 'https://api.openweathermap.org/data/2.5/',
}

const searchInput = document.querySelector('.wheather-input-location');
searchInput.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResult(searchInput.value);
        searchInput.value = ''
    }
}

function getResult(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => weather.json())
        .then(displayResult)
}

function displayResult(weather) {
    let city = document.querySelector('.wheather-container-location');

    if (city !== undefined) {
        city.innerText = 'The city was not found';
    }
    city.innerText = `${weather.name}`;
    let temperature = document.querySelector('.weather-container-temperature');
    temperature.innerText = `${Math.round(weather.main.temp)}°`;
    console.log(weather);
    let minMaxTemperature = document.querySelector('.detailed-weather-min-max');
    minMaxTemperature.innerText = `min: ${Math.round(weather.main.temp_min)}° / max: ${Math.round(weather.main.temp_max)}°`;
    let wind = document.querySelector('.detailed-weather-wind');
    wind.innerText = `wind: ${weather.wind.speed} m/s`;
    let sky = document.querySelector('.detailed-weather-sky');
    sky.innerText = `${weather.weather[0].description}`;
}

const temperatureClick = document.querySelector('.weather-container-temperature');
const detailWeather = document.querySelector('.detailed-weather-container');
const body = document.querySelector('.blur-layer');

temperatureClick.addEventListener("click", function() {
    detailWeather.classList.add("visible-container");
});

detailWeather.addEventListener("click", function() {
    detailWeather.classList.remove("visible-container");
});