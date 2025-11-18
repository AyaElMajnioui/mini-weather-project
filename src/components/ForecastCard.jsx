function ForecastCard({forecast}) {
  return (
    <div className="forecast">
          <h2>5-Day Forecast</h2>
          <div className="forecast-grid">
           {/* For each forecast item, display a weather card */}
            {forecast.map((day, index) => (
              <div key={index} className="forecast-card">
                <p>
                {/* Convert date to readable format */}
                  {new Date(day.dt_txt).toLocaleDateString("en-US", {
                    weekday: "long",
                    day: "numeric",
                    month: "short",
                  })}
                </p>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt={day.weather[0].description}
                />
                <p>{Math.round(day.main.temp)}°C</p>
                <p>{day.weather[0].description}</p>
              </div>
            ))}
          </div>
        </div>
  )
}

export default ForecastCard