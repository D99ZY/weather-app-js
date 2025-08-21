import PropTypes from 'prop-types';

function Top(props) {
  const { weatherData } = props;
  return (
    <div className="top">
      <div className="location">
        <h2>{weatherData ? weatherData.name : 'Durban'}</h2>
      </div>
      <div className="temp">
        <h1>{weatherData ? Math.round(weatherData.main.temp - 273.15) : 28}°C</h1>
      </div>
      <div className="description">
        <h3>{weatherData ? weatherData.weather[0].main : 'Cloudy with a chance of meatballs'}</h3>
      </div>
    </div>
  );
}

Top.propTypes = {
  weatherData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }),
    weather: PropTypes.shape({
      main: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Top;
