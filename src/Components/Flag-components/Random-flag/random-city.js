import { getWeather } from "../../../Services/data";
import { useState } from "react";

export default function RandomCity() {
  const cities = [
    "Bangkok",
    "London",
    "Paris",
    "Dubai",
    "Singapore",
    "Kuala Lumpur",
    "New York City",
    "Istanbul",
    "Tokyo",
    "Antalya",
    "Seoul",
    "Phuket",
    "Mecca",
    "Hong Kong",
    "Milan",
    "Barcelona",
    "Pattaya",
    "Osaka",
    "Bali",
    "Rome",
    "Taipei",
    "Vienna",
    "Prague",
    "Shenzhen",
    "Dublin",
    "Munich",
    "Amsterdam",
    "Las Vegas",
    "Shanghai",
    "Berlin",
    "Moscow",
    "Venice",
    "Warsaw",
    "San Francisco",
    "Beijing",
    "Los Angeles",
    "Madrid",
    "Toronto",
    "Miami",
    "Edinburgh",
    "Sydney",
    "Boston",
    "Zurich",
    "Vancouver",
    "Florence",
    "Marrakesh",
    "Việt Trì",
    "Budapest",
    "Lisbon",
    "Rio de Janeiro",
  ];

  const [currentCity, setCurrentCity] = useState(cities[Math.floor(Math.random() * cities.length)]);

  const handleButtonClick = () => {
    const newCity = cities[Math.floor(Math.random() * cities.length)];
    setCurrentCity(newCity);
    getWeather(newCity);
  };

  return (
    <div>
        <h3>Random City</h3>
      <button className='flags' id='RandomCityBtn' onClick={handleButtonClick}>🔀</button>
    </div>
  );
}