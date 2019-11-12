import React from 'react';
import './WeatherCard.css';
import sun from '../icons/sun.png'

const WeatherCard = (props) => {

  const { error, date, sunrise, sunset, value, city, temp, pressure, wind, tempMin, tempMax, weather, weatherDesc } = props.weatherData;

  return (
    <div className="card">
      <h4><span className="city-name">{city}</span></h4>
      <div>
        <div className="weather-data"></div>
        <div className="weather-main">
          <div className="weather-desc">
            <p><img className="icon-weather" src={sun}></img></p>
            <p><strong>{weatherDesc}</strong></p>
          </div>
          <div className="temperature">{temp} &#176;C</div>
        </div>
        <div className="minmax">
          <p>minimalna: {tempMin}</p>
          <p>maksymalna: {tempMax}</p>
        </div>
      </div>
      <div className="other-data">
        <p>wschód słońca: {sunrise}</p>
        <p>zachód słońca: {sunset}</p>
        <p>Ciśnienie: {pressure} hPa</p>
      </div>
    </div>
  )
}

export default WeatherCard;