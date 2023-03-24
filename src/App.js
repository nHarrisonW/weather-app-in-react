

// Harrison project has so much potential, unfortunately due to a short period of time he got, he didnt build it to it's full potential. But still a good overall project, I get the idea and i hope the TAs and devs would too. Good job!

import { useState, useEffect } from 'react';

import './style.css';
// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row
} from 'react-bootstrap';
// My components
import { getWeather } from './Services/data';

import Head from './Components/Head-component/head';
import London from './Components/Flag-components/London-Flag/london';
import Paris from './Components/Flag-components/Paris-flag/paris';
import Cairo from './Components/Flag-components/Cairo-flag/cairo';
import Moscow from './Components/Flag-components/Moscow-flag/moscow';
import Istanbul from './Components/Flag-components/Istanbul-flag/istanbul';
import NewDelhi from './Components/Flag-components/New-dheli-flag/new-dheli';
import Karachi from './Components/Flag-components/Karachi-flag/karachi';
import Dhaka from './Components/Flag-components/Dhaka-flag/dhaka';
import Jakarta from './Components/Flag-components/Jakarta-flag/jakarta';
import Shanghai from './Components/Flag-components/Shanghai-flag/shanghai';
import Seoul from './Components/Flag-components/Seoul-flag/seoul';
import Tokyo from './Components/Flag-components/Tokyo-flag/tokyo';
import LosAngeles from './Components/Flag-components/LA-flag/la';
import MexicoCity from './Components/Flag-components/Mx-city-flag/mx-city';
import Toronto from './Components/Flag-components/Toronto-flag/toronto';
import Sydney from './Components/Flag-components/Sydney-flag/sydney';
import SaoPaolo from './Components/Flag-components/Sao-paolo-flag/sao-paolo';
import BuenosAires from './Components/Flag-components/Buenos-aires-flag/buenos-aires';
import RandomCity from './Components/Flag-components/Random-flag/random-city';
import Favorites from './Components/Flag-components/Favorites-flag/favorite';
import Footer from './Components/Foot-component/foot';
import CurrentWeatherCard from './Components/Weather-card-components/Current-weather/current-weather';
import ParentComponent from './Components/Weather-card-components/Current-weather/current-weather';
import Weather from './Components/Weather-card-components/Weather-app/weather-app';





export default function App() {
  return (
    <div className='App-bg'>
      <Container>
        < Head />  
        <Row>
          <div className='dummy'>
            < London />
            < Paris />
            < Cairo />
            < Moscow />
            < Istanbul />
          </div>
        </Row>
        <Row>
          <div className='dummy'>
            < Karachi />
            < NewDelhi />
            < Dhaka />
            < Jakarta />
            < Shanghai />
          </div>
        </Row>
        <Row>
          <div className='dummy'>
            < Seoul />
            < Tokyo />
            < LosAngeles />
            < MexicoCity />
            < Toronto />
          </div>
        </Row>
        <Row>
          <div className='dummy'>
            < Sydney />
            < SaoPaolo />
            < BuenosAires />
            < RandomCity />
            < Favorites />
          </div>
            < Footer />
            
        </Row>
      </Container>
    </div>
  )
}

