function App() {
  const WEATHER_KEY = import.meta.env.WEATHER_API_KEY;
  const cityName = 'London';
  // Gets lat and long coords
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${WEATHER_KEY}`;
  // Gets weather
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${WEATHER_KEY}`;

  return <>Hello</>;
}

export default App;
