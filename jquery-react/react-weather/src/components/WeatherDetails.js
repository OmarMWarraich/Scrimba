import React from 'react';

class WeatherDetails extends React.Component {
    render() {
        const { pressure, humidity } = this.props.main
        return (
            <>
            <div className="weather-details">
                <p className="weather-detail">Pressure: {pressure}</p>
                <p className="weather-detail">Humidity: {humidity}</p>
              </div>
            </>   
        )
    }
}

export default WeatherDetails;