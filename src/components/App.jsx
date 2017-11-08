import React from 'react';
import classNames from 'classnames';
import 'whatwg-fetch';
import CONSTANTS from './../../config/variables.config';
import FrontCard from './FrontCard/FrontCard';
import BackCard from './BackCard/BackCard';
import style from './App.scss';
import mapImg from '../img/map.svg';
import weatherImg from '../img/weather.svg';

let iconBtn = mapImg;
const weatherApiKey = CONSTANTS.WEATHER_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      lang: CONSTANTS.language,
      temperatureUnit: CONSTANTS.temperatureUnit,
      windspeedUnit: CONSTANTS.windSpeedUnit,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    if (navigator.geolocation) {
      this.setState({
        geolocationSupported: true,
      });
    } else {
      this.setState({
        geolocationSupported: false,
      });
    }
  }

  componentDidMount() {
    const self = this;

    // Check if browser support html5 geolocation
    if (navigator.geolocation) {
      // HTML5 GEO-LOCATION SUCCESS
      const success = (pos) => {
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

      // HTML5 GEO-LOCATION ERROR
      const error = (err) => {
        console.error(`ERROR (${err.code}): ${err.message}`); //eslint-disable-line
        this.setState({
          geolocationSupported: false,
        });
      };

      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
      });
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
        {!this.state.geolocationSupported ? <h1>Geolocation is not supported</h1> : (
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
            <BackCard lat={this.state.lat} lng={this.state.lng} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
