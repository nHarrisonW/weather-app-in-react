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

  const [currentCity, setCurrentCity] = useState(
    cities[Math.floor(Math.random() * cities.length)]
  );
  const [weatherData, setWeatherData] = useState(null);

  const handleButtonClick = async () => {
    const newCity = cities[Math.floor(Math.random() * cities.length)];
    setCurrentCity(newCity);
    const data = await getWeather(newCity);
    setWeatherData(data);
  };

  return (
    <div>
      <h3>Random City</h3>
      <button className="flags" id="RandomCityBtn" onClick={handleButtonClick}>
        🔀
      </button>
      {weatherData && (
        <div className="data">
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
