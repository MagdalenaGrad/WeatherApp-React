import React from 'react';
import './App.css';
import Search from './components/Search';
import WeatherCard from './components/WeatherCard';
import WeatherApi from './handlers/api';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.api = new WeatherApi();
    this.state = {
      value: '',
      date: "",
      city: "",
      sunrise: "",
      sunset: "",
      temp: "",
      pressure: "",
      wind: "",
      error: false,
      tempMin: "",
      tempMax: "",
      weather: "",
      weatherDesc: ""
    }
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  getWeather = async (query) => {
    let response = await this.api.getWeatherData(query);
    console.log(response);
    // console.table(response.main);

    if (!response) {
      console.log("złapałam");
      this.setState({
        error: true,
        city: this.state.value
      })
    } else {
      const currentDate = new Date().toLocaleString();
      this.setState({
        error: false,
        date: currentDate,
        sunrise: response.sys.sunrise,
        sunset: response.sys.sunset,
        temp: response.main.temp,
        tempMin: response.main.temp_min,
        tempMax: response.main.temp_max,
        pressure: response.main.pressure,
        wind: response.wind.speed,
        city: this.state.value,
        weather: response.weather[0].main,
        weatherDesc: response.weather[0].description,
      })
    }
  }

  handleCitySearch = (e) => {
    e.preventDefault();
    this.getWeather(this.state.value);
  }

  render() {
    return (
      <div className="App">
        <Search
          change={this.handleInputChange}
          submit={this.handleCitySearch}
        />
        <WeatherCard weatherData={this.state} />
      </div>
    )
  }
}

export default App;
