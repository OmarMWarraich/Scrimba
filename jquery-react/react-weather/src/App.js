import React from 'react';
import Header from './components/Header';
import WeatherSearch from './components/WeatherSearch'

class App extends React.Component {
  api_call = async () => {
    const API_KEY = "9c3cb98520f309bd159e77512e8e5e28"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`
    const request = await fetch(url)
    const response = await request.json
    console.log("Success!")
  }
  render () {
  return (
    <div className="App">
      <Header />
      <WeatherSearch />
    </div>
  );
}
}

export default App;
