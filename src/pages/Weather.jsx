import { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [forecast, setForecast] = useState([]);
  // OpenWeather API key
  const key = "db5f25b0d1a5de0f53f42167dedf3b6f";

  // Fetch current weather
  function fetchWeather(city) {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: { q: city, appid: key, units: "metric", lang: "en" },
      })
      .then((res) => {
        setWeather(res.data);
        setError("");
      })
      .catch(() => {
        setWeather(null);
        setError("City not found!");
      });
    // Fetch 5-day forecast
    axios
      .get(`https://api.openweathermap.org/data/2.5/forecast`, {
        params: { q: city, appid: key, units: "metric", lang: "en" },
      })
      .then((res) => {
        // Keep one forecast per day (12:00)
        const dailyData = res.data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );
        setForecast(dailyData);
      })
      .catch(() => setForecast([]));
  }
  // Load last searched city
  useEffect(() => {
    const lastCity = localStorage.getItem("city");
    if (lastCity) {
      fetchWeather(lastCity);
    }
  }, []);
  function handleSearch() {
    if (city.trim() === "") return;
    fetchWeather(city);
    localStorage.setItem("city", city); // Save the city
  }
  return (
    <div className="page-container weather">
      <h1>Search for a city</h1>
      <div>
        <input
          type="text"
          placeholder="Type a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error">{error}</p>} <br />
      {weather && <WeatherCard weather={weather} />}
      {forecast.length > 0 && <ForecastCard forecast={forecast} />}
    </div>
  );
}

export default Weather;
