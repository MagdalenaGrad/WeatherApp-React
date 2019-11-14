import React from 'react';
import './WeatherCard.css';
import sun from '../icons/sun.png'

const WeatherCard = (props) => {

  const { error, date, sunrise, sunset, value, city, temp, pressure, wind, tempMin, tempMax, weather, weatherDesc } = props.weatherData;


  const sunriseTime = new Date(sunrise).toLocaleTimeString();
  const sunsetTime = new Date(sunset).toLocaleTimeString();

  const contentCard = null;

  return (
    <div className="card">
      <h4><span className="city-name">{city}</span></h4>
      <div>
        <div className="weather-main">
          <img className="icon-weather" src={sun}></img>
          <div className="weather-desc">
            <p><strong>{weatherDesc}</strong></p>
          </div>
        </div>
        <div className="weather-temp">
          <div className="temperature">{temp} &#176;C</div>
          <div className="minmax">
            <div className="min">min</div>
            <div className="temp-min">{tempMin}</div>
            <div className="minmax-icon"><i class="fas fa-temperature-high"></i></div>
            <div className="max">max</div>
            <div className="temp-max">{tempMax}</div>
          </div>
        </div>
      </div>
      <div className="other-data">
        <p>wschód słońca: {sunriseTime}</p>
        <p>zachód słońca: {sunsetTime}</p>
        <p>Ciśnienie: {pressure} hPa</p>
      </div>
    </div>
  )
}

export default WeatherCard;