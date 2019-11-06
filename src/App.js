import React from 'react';
import './App.css';
import Search from './components/Search';
import MainOutput from './components/MainOutput';
import WeatherApi from './handlers/api';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.api = new WeatherApi;
    this.state = {
      value: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
    console.log(e.target.value);
  }

  getWeather = async (query) => {
    let response = await this.api.getWeatherData(query);
    console.log(response);
    console.log(response.main);
    console.table(response.main);
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
        <MainOutput />
      </div>
    )
  }
}

export default App;
