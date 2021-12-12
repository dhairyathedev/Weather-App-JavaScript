let temp, max_temp, min_temp, feels, pressure,humidity, wind_speed, wind_direction, description, icon = '';
const weatherIcon = document.getElementById('weather_icon');
const weatherDescription = document.getElementById('conditions');
const temp_value = document.getElementById('temp');
const feel = document.getElementById('feel');
const windVelocity = document.getElementById('wind_velocity');
const loc = document.getElementById('loc');
// const location = document.getElementById('location');
async function getWeather(){

    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc.value}&appid=API_KEY`)
    .then(d => d.json())
    .then(response => {
        // console.log(response.main.temp - 273.15);
        temp = response.main.temp - 273.15;
        max_temp = response.main.temp_max - 273.15;
        min_temp = response.main.temp_min - 273.15;
        feels = response.main.feels_like - 273.15;
        pressure = response.main.pressure;
        humidity = response.main.humidity;
        wind_speed = response.wind.speed;
        wind_direction = response.wind.deg;
        icon = `http://openweathermap.org/img/w/${response.weather[0].icon}.png`;
        description = response.weather[0].description;
        weatherIcon.src = icon;
        
        weatherDescription.innerHTML =  description.charAt(0).toUpperCase() + description.slice(1);;
        temp_value.innerHTML = temp.toFixed(0) + "°C";
        feel.innerHTML = feels.toFixed(0) + "°C";
        windVelocity.innerHTML = wind_speed.toFixed(0) + " m/s";
    })
}
