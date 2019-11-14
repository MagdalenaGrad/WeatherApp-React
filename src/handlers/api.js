import axios from 'axios';

export default class WeatherApi {
  constructor() {
    this.API_key = '50553c07ad1a73a06545b0ef6b79ebaf';
    // this.baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${API_key}&units=metric&lang=pl`;
  }
  async getWeatherData(city) {
    const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.API_key}&units=metric&lang=pl`;
    let result;
    await axios.get(apiURL)
      .then(res => {
        result = res.data;
      })
      .catch(err => {
        if (err.response) {
          // console.log(err.response.data);
          console.log(err.response.status);
          // console.log(err.response.request);
          console.log('Error', err.message);
        }
        // console.error(err);
      });
    return result;
  }

}