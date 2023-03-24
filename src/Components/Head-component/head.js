

import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import { getWeather } from '../../Services/data';

export default function Head() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const city = document.getElementById('searchBar').value;
    const data = await getWeather(city);
    setWeatherData(data);
  };

  return (
    <div className='head'>
      <h1>My Weather App</h1>
      <Row>
        <form id='searchForm' onSubmit={handleSubmit}>
          <input placeholder='Enter a city or ZIP code here' id='searchBar' type="text" />
          <button type='submit'>Search</button>
          <button>Save to faves</button>
        </form>
      </Row>
      <h2>Get Weather Around the World!</h2>
      {weatherData && (
        <div className='data'>
          <p>City: {weatherData.city}</p>
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

