

import React from 'react'
import { Row } from 'react-bootstrap';
import { getWeather } from '../../Services/data';

export default function Head() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const city = document.getElementById('searchBar').value;
    getWeather(city);
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
    </div>
  );
}
