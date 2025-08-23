import PropTypes from 'prop-types';

function Top(props) {
  const { geoData, weatherData } = props;

  return (
    <div className="top">
      <div className="location">
        <h2>{geoData ? `${geoData[0].name}, ${geoData[0].country}` : 'Durban, ZA'}</h2>
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
  geoData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  weatherData: PropTypes.shape({
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        main: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Top;
