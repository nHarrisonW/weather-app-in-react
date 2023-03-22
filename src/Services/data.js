

import React from 'react'
import axios from 'axios';

export async function getWeather(city) {
  const API_KEY = 'ce63f8535b9bdbce7b1c458b087c2c0e';
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&exclude=current,minutely,hourly&appid=${API_KEY}`;

  try {
    // Get current weather
    const currentWeatherResponse = await axios.get(currentWeatherUrl);
    const currentWeatherData = currentWeatherResponse.data;
    const city = currentWeatherData.name;
    const temperature = Math.ceil(currentWeatherData.main.temp);
    const windSpeed = Math.ceil(currentWeatherData.wind.speed);
    const description = currentWeatherData.weather[0].description;
    const country = currentWeatherData.sys.country;
    const timezone = currentWeatherData.timezone / 3600;
    console.log(`Timezone: ${timezone} hours`);
    console.log(`City: ${city}`);
    console.log(`Country: ${country}`);
    console.log(`Temperature: ${temperature} °C`);
    console.log(`Wind Speed: ${windSpeed} m/s`);
    console.log(`Description: ${description}`);

    // Get 5-day forecast
    const forecastResponse = await axios.get(forecastUrl);
    const forecastData = forecastResponse.data;
    const forecastList = forecastData.list.filter(item => {
      return item.dt_txt.includes('15:00:00');
    });
    console.log('5-day forecast (high temperatures at 3pm):');
    const uniqueDates = [];
    forecastList.forEach(item => {
      const date = new Date(item.dt * 1000).toLocaleDateString('en-US', {month: 'numeric', day: 'numeric', year: 'numeric'});
      if (!uniqueDates.includes(date)) {
        uniqueDates.push(date);
      }
    });
    uniqueDates.forEach(date => {
      console.log(`${date}:`);
      forecastList.forEach(item => {
        const itemDate = new Date(item.dt * 1000).toLocaleDateString('en-US', {month: 'numeric', day: 'numeric', year: 'numeric'});
        if (date === itemDate) {
          const highTemp = Math.ceil(item.main.temp_max);
          const pop = item.pop;
          console.log(`  High Temperature: ${highTemp} °C, Chance of Rain: ${pop}%`);
        }
      });
    });

    // Save data to variables
    const currentWeather = {
      city,
      temperature,
      windSpeed,
      description,
      country,
      timezone,
    };
    return currentWeather;

  } catch (error) {
    console.error(error);
    alert('Location not found')
  }
}

