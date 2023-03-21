import React from 'react'
import axios from 'axios';

export async function getWeather(city) {
  const API_KEY = 'ce63f8535b9bdbce7b1c458b087c2c0e';
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
  const countryUrl = `https://restcountries.eu/rest/v2/alpha/`;

  try {
    // Get current weather
    const currentWeatherResponse = await axios.get(currentWeatherUrl);
    const currentWeatherData = currentWeatherResponse.data;
    console.log(`City: ${currentWeatherData.name}`);
    console.log(`Temperature: ${Math.ceil(currentWeatherData.main.temp)} °C`);
    console.log(`Wind Speed: ${Math.ceil(currentWeatherData.wind.speed)} m/s`);
    console.log(`Description: ${currentWeatherData.weather[0].description}`);

    // Get full country name
    const countryResponse = await axios.get(`${countryUrl}${currentWeatherData.sys.country}`);
    const countryData = countryResponse.data;
    console.log(`Country: ${countryData.name}`);

    console.log(`Sunrise: ${new Date(currentWeatherData.sys.sunrise * 1000).toLocaleTimeString()}`);
    console.log(`Sunset: ${new Date(currentWeatherData.sys.sunset * 1000).toLocaleTimeString()}`);
    console.log(`Timezone: ${currentWeatherData.timezone / 3600} hours`);

    // Get 5-day forecast
    const forecastResponse = await axios.get(forecastUrl);
    const forecastData = forecastResponse.data;
    const forecastList = forecastData.list.slice(0, 5); // Get first 5 days
    console.log('5-day forecast (high temperatures):');
    forecastList.forEach(item => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      const highTemp = Math.ceil(item.main.temp_max);
      console.log(`${date}: ${highTemp} °C`);
    });

  } catch (error) {
    console.error(error);
    alert('Location not found')
  }
}
