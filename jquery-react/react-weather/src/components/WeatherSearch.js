import React from 'react';

class WeatherSearch extends React.Component {
    render() {
        return (
            <form className="search-form">
            <input className="user-input" type="text" placeholder="Location"/>
            <button className="search-button">&rarr;</button>
          </form>
        )
    }
}

export default WeatherSearch;