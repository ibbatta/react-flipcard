import React from 'react';
import PropTypes from 'prop-types';
import style from './Weather.scss';

import day from '../../../img/weather-icon/day.svg';
import night from '../../../img/weather-icon/night.svg';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: this.props.icon,
      text: this.props.text,
    };
  }

  componentWillMount() {
    this.checkWeatherIcon();
  }

  componentDidUpdate() {
    this.getTempcheckWeatherIconratureUnit();
  }

  checkWeatherIcon() {
    switch (this.state.icon) {
      case 'day':
        this.state.img = day;
        break;
      case 'night':
        this.state.img = night;
        break;
      default:
        this.state.img = day;
        break;
    }
    return this.state.img;
  }

  render() {
    return (
      <div className={style.weatherBar}>
        <div className={style.weatherIconWrapper}>
          <img className={style.weatherIcon} src={this.state.img} alt="weather-icon" />
        </div>
        <div className={style.weatherText}>
          {this.state.text}
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};

Weather.defaultProps = {
  icon: null,
  text: 'undefined',
};

export default Weather;
