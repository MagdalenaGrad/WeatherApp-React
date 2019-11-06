import React from 'react';

const MainOutput = (props) => {

  const { error, date, sunrise, sunset, value, city, temp, pressure, wind, tempMin, tempMax, weather, weatherDesc } = props.weatherData;

  return (
    <div className="output-field">
      <h4>Pogoda dla miasta: {city}</h4>
      <div>
        <p><strong>{weatherDesc}</strong></p>
        <p>temperatura: {temp}</p>
        <p>min: {tempMin}</p>
        <p>max: {tempMax}</p>
        <p>zachód słońca: {sunset}</p>
      </div>
    </div>
  )
}

export default MainOutput;