import React from 'react';
import classNames from 'classnames';
import 'whatwg-fetch';
import FrontCard from './FrontCard/FrontCard';
import BackCard from './BackCard/BackCard';
import style from './App.scss';
import mapImg from '../img/map.svg';
import weatherImg from '../img/weather.svg';

let iconBtn = mapImg;
const weatherApiKey = 'eed4cc3e34d141e2922a0ea06dc8cb4f';
const googleMapApiKey = 'AIzaSyDMC-w0Zmbbn9fVlTsabWhZns71ePpLLeA';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      lang: 'it',
      temperatureUnit: 'c',
      windspeedUnit: 'mph',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const self = this;

    if (navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
      };

      const success = (pos) => {
        // const apiUrl = `https://api.weatherbit.io/v2.0/current?lang=it&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&key=eed4cc3e34d141e2922a0ea06dc8cb4f`;
        const apiUrl = `https://api.weatherbit.io/v2.0/current?lang=${this.state.lang}&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&key=${weatherApiKey}`;
        const request = new Request(apiUrl, {
          method: 'GET',
          mode: 'cors',
          redirect: 'follow',
          headers: {
            'Content-Type': 'text/json; charset=utf-8',
          },
        });

        this.setState({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
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
                windspeed: data.wind_spd,
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

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped,
    }));
    if (this.state.isFlipped) {
      iconBtn = mapImg;
    } else {
      iconBtn = weatherImg;
    }
  }


  render() {
    return (
      <div className={style.AppContainer}>
        <button
          className={style.AppContainer__toggle}
          onClick={this.handleClick}
        >
          <img className={style.AppContainer__img} src={iconBtn} alt="flip-icon" />
          <span>{this.state.isFlipped ? 'Weather' : 'Map'}</span>
        </button>
        <div
          className={
            classNames(style.AppContainer__item, this.state.isFlipped ? style.flipped : null)
          }
        >
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
          <BackCard lat={this.state.lat} lng={this.state.lng} apikey={googleMapApiKey} />
        </div>
      </div>
    );
  }
}

export default App;
