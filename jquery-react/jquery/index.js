$(document).ready(() => {
    const searchButton = $(".search-button")
    const userInput = $(".user-input")
    const weatherData = $(".weather-data").hide()  
    const error = $(".error").hide()
  
    const api_call = () => {
      const location = userInput.val() 
      const API_KEY = "9c3cb98520f309bd159e77512e8e5e28"
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      if (location) {
        $.ajax({ url, type: "GET", dataType: "jsonp",
        success: ({ main, name, sys, weather }) => {
          const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
          weatherData.show()
          weatherData.html(`
            <h3 class="city-name">${name}, ${sys.country}</h3>
            <p class="weather-temperature">${main.temp}°C</p>
            <img class="weather-icon" src=${weatherIcon} alt="WeatherIcon"/>
            <button class="weather-details-button">Details</button>
          `)
          const weatherDetailsButton = $(".weather-details-button")
          weatherDetailsButton.click(() => {
            weatherData.html(`
            <h3 class="city-name">${name}, ${sys.country}</h3>
            <p class="weather-temperature">${main.temp}°C</p>
            <img class="weather-icon" src=${weatherIcon} alt="WeatherIcon"/>
              <div class="weather-details">
                <p class="weather-detail">Pressure: ${main.pressure}</p>
                <p class="weather-detail">Humidity: ${main.humidity}</p>
              </div>
            `)
          })
          userInput.val("") 
          error.hide()
        }
      })
      } else { 
        error.show()
        weatherData.hide()
      }
    }
  
    searchButton.click(e => {
      e.preventDefault()
      api_call()
    })
    
  })