import React, { useState } from 'react';
import { getWeather } from "../../../Services/data";

export default function Toronto() {
  const [weatherData, setWeatherData] = useState(null);

  const handleGetWeather = async (city) => {
    const data = await getWeather(city);
    setWeatherData(data);
  };

  return (
    <div>
      <h3>Toronto</h3>
      <button className='flags' id='TorontoBtn' onClick={() => handleGetWeather('Toronto')}>
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
