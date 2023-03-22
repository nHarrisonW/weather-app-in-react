
import React from 'react';
import { getWeather } from '../../../Services/data';


export default function CurrentWeatherCard({ currentWeather }) {
    return (
      <div className='weather-bg'>
        <p>City: {currentWeather.city}</p>
        <p>Temperature: {currentWeather.temperature} °C</p>
        <p>Wind Speed: {currentWeather.windSpeed} m/s</p>
        <p>Description: {currentWeather.description}</p>
        <p>Country: {currentWeather.country}</p>
        <p>Timezone: {currentWeather.timezone} hours</p>
      </div>
    );
  }
