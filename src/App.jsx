function App() {
  const WEATHER_KEY = import.meta.env.WEATHER_API_KEY;
  const cityName = 'London';
  // Gets lat and long coords
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${WEATHER_KEY}`;
  // Gets weather
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${WEATHER_KEY}`;

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <h2>London</h2>
          </div>
          <div className="temp">
            <h1>28°C</h1>
          </div>
          <div className="description">
            <h3>Clouds</h3>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">26°C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">50%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12mph</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
