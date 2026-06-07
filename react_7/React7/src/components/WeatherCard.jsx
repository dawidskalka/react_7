function WeatherCard({ city, temperature, conditions = "sunny", warning}) {
  const icon = pogoda(conditions);

  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Conditions: {conditions}{icon}</p>
      {warning && <p className="warning">{warning}</p>}
    </div>
  );
}

function pogoda(conditions) {
  if (conditions === "sunny") {
    return "☀️";
  }

  if (conditions === "rainy") {
    return "🌧️";
  }

  return "☁️";
}

export default WeatherCard;