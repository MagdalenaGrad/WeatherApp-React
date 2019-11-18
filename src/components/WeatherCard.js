import React from 'react';
import './WeatherCard.css';
import sun from '../icons/sun.png'

const WeatherCard = (props) => {

  const { error, date, sunrise, sunset, value, city, temp, pressure, wind, tempMin, tempMax, weather, weatherDesc } = props.weatherData;


  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  let contentCard = null;

  if (city && !error) {
    contentCard = (
      <div className="card">
        <h4><span className="city-name">{city}, {date}</span></h4>
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
              <div className="minmax-icon"><i className="fas fa-temperature-high"></i></div>
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
  return (
    <div>
      {error ? <div className="card">{`Nie mogę odnaleźć miasta "${city}". Spróbuj jeszcze raz.`}</div> : contentCard}
    </div>
  )
}

export default WeatherCard;
