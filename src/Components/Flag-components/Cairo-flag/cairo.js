import React, { useState } from 'react';
import { getWeather } from '../../../Services/data';

export default function Cairo() {
  const [weatherData, setWeatherData] = useState(null);

  const handleGetWeather = async (city) => {
    const data = await getWeather(city);
    setWeatherData(data);
  };

  return (
    <div>
      <h3>Cairo</h3>
      <button className='flags' id='CairoBtn' onClick={() => handleGetWeather('Cairo')}>
      </button>

      {weatherData && (
        <div className='data'>
          <p>Country: {weatherData.country}</p>
          <p>Temperature: {weatherData.temperature} °C</p>
          <p>High Temperature: {weatherData.highTemperature} °C</p>
          <p>Low Temperature: {weatherData.lowTemperature} °C</p>
          <p>Wind Speed: {weatherData.windSpeed} m/s</p>
          <p>Description: {weatherData.description}</p>
        </div>
      )}
    </div>
  );
}
