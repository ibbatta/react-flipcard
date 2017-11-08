import React from 'react';
import PropTypes from 'prop-types';
import style from './Weather.scss';
import Loader from './../../Loader/Loader';
import weatherMap from '../../../../config/weatherMap.config';
import defaultImg from '../../../img/weather-icon/default.svg';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setWeatherIcon() {
    let weatherImg;
    const wCode = parseInt(this.props.weatherCode, 10);
    const wPod = this.props.pod;

    const element = weatherMap.find(obj => obj.code.includes(wCode));
    if (!element) {
      weatherImg = defaultImg;
    } else {
      weatherImg = wPod === 'd' ? element.iconDay : element.iconNight;
    }

    return weatherImg;
  }

  render() {
    return (
      <div className={style.WeatherBar}>
        <div className={style.WeatherBar__WeatherIconWrapper}>
          {!this.props.weatherCode || !this.props.pod ?
            (
              <Loader />
            ) : (
              <img
                className={style.WeatherBar__WeatherIcon}
                src={this.setWeatherIcon()}
                alt="weather-icon"
              />
            )}
        </div>
        <div className={style.WeatherBar__WeatherText}>
          {!this.props.weatherCode || !this.props.pod ? <Loader /> : this.props.weatherDescription}
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  pod: PropTypes.string,
  weatherCode: PropTypes.string,
  weatherDescription: PropTypes.string,
};

Weather.defaultProps = {
  pod: null,
  weatherCode: null,
  weatherDescription: null,
};

export default Weather;
