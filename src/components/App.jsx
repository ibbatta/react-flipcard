import React from 'react';
import 'whatwg-fetch';
import FrontCard from './FrontCard/FrontCard';
import style from './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'it',
    };
  }

  componentDidMount() {
    const self = this;

    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
      };

      const success = (pos) => {
        // const apiUrl = `https://api.weatherbit.io/v2.0/current?lang=it&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&key=eed4cc3e34d141e2922a0ea06dc8cb4f`;
        const apiUrl = `https://api.weatherbit.io/v2.0/current?lang=${this.state.lang}&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&key=eed4cc3e34d141e2922a0ea06dc8cb4f`;
        const request = new Request(apiUrl, {
          method: 'GET',
          mode: 'cors',
          redirect: 'follow',
          headers: {
            'Content-Type': 'text/json; charset=utf-8',
          },
        });

        fetch(request)
          .then(response => response.json())
          .then((json) => {
            if (json && json.data && json.data[0]) {
              const data = json.data[0];
              self.setState({
                city: data.city_name,
                country: data.country_code,
                temperature: data.temp,
                temperatureUnit: 'c',
                windspeed: data.wind_spd,
                windspeedUnit: 'mph',
                humidity: data.rh,
                weatherCode: data.weather.code,
                weatherDescription: data.weather.description,
                pod: data.pod,
              });
            }
          }).catch((err) => {
            console.error(`ERROR (${err.code}): ${err.message}`); //eslint-disable-line
          });
      };

      const error = (err) => {
        console.error(`ERROR (${err.code}): ${err.message}`); //eslint-disable-line
      };
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      console.error('Your browser does not support geolocation'); //eslint-disable-line
    }
  }

  render() {
    return (
      <div className={style.AppContainer}>
        <div className={style.AppContainer__item}>
          <FrontCard
            temperatureUnit={this.state.temperatureUnit}
            windspeedUnit={this.state.windspeedUnit}
            temperature={this.state.temperature}
            windspeed={this.state.windspeed}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            weatherCode={this.state.weatherCode}
            weatherDescription={this.state.weatherDescription}
            pod={this.state.pod}
            lang={this.state.lang}
          />
        </div>
      </div>
    );
  }
}

export default App;
