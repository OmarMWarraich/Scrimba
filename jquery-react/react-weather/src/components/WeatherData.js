
import React from 'react';
import WeatherDetails from './WeatherDetails';

class WeatherData extends React.Component {
    state = {
        showWeatherDetails: false
        }

    render() {
        const { main, name, sys, weather } = this.props.weatherData;
        const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
        return (
            <div className="weather-data">
                <h3 className="city-name">{name}, {sys.country}</h3>
                <p className="weather-temperature">{main.temp}°C</p>
                <img className="weather-icon" src={weatherIcon} alt="WeatherIcon"/> 
                <button
                    onClick={() => this.setState({ showWeatherDetails: true })}
                    className="weather-details-button">Details
                </button>
                { this.state.showWeatherDetails && <WeatherDetails main={main} /> }
            </div>
        )
    }
}

export default WeatherData;