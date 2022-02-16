
import React from 'react';


const WeatherSearch = (props) => {
    const request = props.api_call
    return (
        <form onSubmit={request} className="search-form">
        <input name="location" className="user-input" type="text" placeholder="Location"/>
        <button className="search-button">&rarr;</button>
      </form>
    )
}

export default WeatherSearch;