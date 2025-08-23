import PropTypes from 'prop-types';

function Bottom(props) {
  const { weatherData } = props;

  return (
    <div className="bottom">
      <div className="feels">
        <p className="bold">
          {weatherData ? Math.round(weatherData.main.feels_like - 273.15) : 26}°C
        </p>
        <p>Feels Like</p>
      </div>
      <div className="humidity">
        <p className="bold">{weatherData ? Math.round(weatherData.main.humidity) : 50}%</p>
        <p>Humidity</p>
      </div>
      <div className="wind">
        <p className="bold">{weatherData ? Math.round(weatherData.wind.speed * 2.237) : 12}mph</p>
        <p>Wind Speed</p>
      </div>
    </div>
  );
}

Bottom.propTypes = {
  weatherData: PropTypes.shape({
    main: PropTypes.shape({
      feels_like: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Bottom;
