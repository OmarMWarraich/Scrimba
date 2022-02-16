import React from 'react';

class WeatherData extends React.Component {
    render() {
        const { main, name, sys, weather } = this.props.weatherData;
        const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
        return (
            <div className="weather-data">
                <h3 className="city-name">{name}, {sys.country}</h3>
                <p className="weather-temperature">{main.temp}°C</p>
                <img className="weather-icon" src={weatherIcon} alt="WeatherIcon"/> 
            <button className="weather-details-button">Details</button>
            </div>
        )
    }
}

export default WeatherData;