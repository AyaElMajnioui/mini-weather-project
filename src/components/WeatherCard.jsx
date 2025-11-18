function WeatherCard({ weather }) {
  if (!weather || !weather.main) return null;
  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Icône météo"/>
      <h3>{Math.round(weather.main.temp)}°C</h3>
      <p>{weather.weather[0].description}</p>
      <p>💧 Humidity : {weather.main.humidity}% 💨 Wind : {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
