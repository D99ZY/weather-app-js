import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Top from './components/Top';
import Bottom from './components/Bottom';

function App() {
  // State variables
  const [city, setCity] = useState('');
  const [geoData, setGeoData] = useState();
  const [weatherData, setWeatherData] = useState();

  // API Key
  const WEATHER_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  // Ref to the <input> DOM element
  const inputRef = useRef(null);

  // Gets lat and long coords for city
  const getCoords = useCallback(() => {
    if (!city) return;
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${WEATHER_KEY}`;

    axios.get(geoUrl).then((response) => {
      setGeoData(response.data);
      console.log(`Geo response.data ${JSON.stringify(response.data)}`);
    });
  }, [WEATHER_KEY, city]);

  // Gets weather based on lat long coords
  const getWeather = useCallback(() => {
    if (!geoData) return;

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${WEATHER_KEY}`;

    axios.get(weatherUrl).then((response) => {
      setWeatherData(response.data);
      console.log(`Weather response.data ${JSON.stringify(response.data)}`);
    });
  }, [WEATHER_KEY, geoData]);

  const handleSearch = useCallback((cityName) => {
    setCity(cityName);
  }, []);

  useEffect(() => {
    getCoords();
  }, [city, getCoords]);

  useEffect(() => {
    getWeather();
  }, [geoData, getWeather]);

  return (
    <div className="app">
      <Search ref={inputRef} handleSearch={handleSearch} />
      <div className="container">
        <Top geoData={geoData} weatherData={weatherData} />
        <Bottom weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
