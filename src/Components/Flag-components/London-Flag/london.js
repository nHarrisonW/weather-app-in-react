

import React from 'react'
import axios from 'axios';


export async function getWeather(city) {
  const API_KEY = 'ce63f8535b9bdbce7b1c458b087c2c0e';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(`City: ${data.name}`);
    console.log(`Temperature: ${Math.ceil(data.main.temp)} °C`);
    console.log(`Wind Speed: ${Math.ceil(data.wind.speed)} m/s`);
    console.log(`Description: ${data.weather[0].description}`);
  } catch (error) {
    console.error(error);
  }
}


  
  export default function London() {
    return (
      <>
        <button className='flags' id='LondonBtn' onClick={() => getWeather('London')}>
          London
        </button>
      </>
    );
  }

  