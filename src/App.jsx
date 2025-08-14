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
            <p>London</p>
          </div>
          <div className="temp">
            <h1>28C</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>26C</p>
          </div>
          <div className="humidity">
            <p>50%</p>
          </div>
          <div className="wind">
            <p>12mph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
