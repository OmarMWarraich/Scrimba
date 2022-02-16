import React from 'react';
import Header from './components/Header';
import WeatherSearch from './components/WeatherSearch'
import WeatherData from './components/WeatherData';
import ErrorMessage from './components/ErrorMessage';

class App extends React.Component {
  state = {
    weather: null,
    showError: false
  }
  api_call = async (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value
    if (location) {
    const API_KEY = "9c3cb98520f309bd159e77512e8e5e28"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    const request = await fetch(url)
    const response = await request.json()
    this.setState({weather: response, showError: false})
    } else {
      return this.setState({ showError: true, weather: null })
    }
  }
  render () {
  return (
    <div className="App">
      <Header />
      <WeatherSearch api_call={this.api_call} />
      { this.state.weather && <WeatherData weatherData={this.state.weather} />}
      { this.state.showError && <ErrorMessage /> }
    </div>
  );
}
}

export default App;
