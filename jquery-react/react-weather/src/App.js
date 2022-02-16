import React from 'react';
import Header from './components/Header';
import WeatherSearch from './components/WeatherSearch'
import WeatherData from './components/WeatherData';

class App extends React.Component {
  state = {
      weather: null
  }
  api_call = async (e) => {
    e.preventDefault();
    const API_KEY = "9c3cb98520f309bd159e77512e8e5e28"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`
    const request = await fetch(url)
    const response = await request.json()
    this.setState({weather: response})
  }
  render () {
  return (
    <div className="App">
      <Header />
      <WeatherSearch api_call={this.api_call} />
      { this.state.weather && <WeatherData weatherData={this.state.weather} /> }
    </div>
  );
}
}

export default App;
