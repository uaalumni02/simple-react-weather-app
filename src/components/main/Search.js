import React, { Component } from 'react';

class Search extends React.Component {
    state = {
      cityName: '',
      
    }

    fetchCityWeather(cityName){
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&units=imperial&appid=a76a5d02e8ccf94ea0744bc153ba9845`;
        fetch(API_URL)
            .then(response => response.json())
            .then(weather => {
                this.setState({ weather, error: '' })
            })
            .catch(error => this.setState({ error: error.message }))
    }

    submitFormHandler(e) {
        e.preventDefault();
        this.fetchCityWeather(this.state.cityName);
    }

    inputChangeHandler(e) {
        const cityName = e.target.value;
        this.setState({ cityName });
    }

    render() {
        return (
            <div>
                <h3> { this.state.cityName } </h3>
                <p> { this.state.error } </p>
                <form onSubmit={ this.submitFormHandler.bind(this) }>
                    <label>City:
                        <input 
                        type="text"
                        placeholder="city name"
                        onChange={ this.inputChangeHandler.bind(this) }
                        />
                    </label>
                    <br /><br></br>
                    <input type="submit" value="Submit" />
                </form>
                { 
                    this.state.weather ?
                        <div>
                            <h3> Weather information for { this.state.weather.name } </h3>
                            <h3> Current Temp: { this.state.weather.main.temp } </h3>
                            <h3> Min Temp for today: { this.state.weather.main.temp_min } </h3>
                            <h3> Max Temp for today: { this.state.weather.main.temp_max } </h3>
                            <h3> Current Humidity: { this.state.weather.main.humidity } </h3>

                        </div>
                    : null
                    
                }
            </div>
        );
    }
  }
  export default Search;
    