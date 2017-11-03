import React from 'react';
import PropTypes from 'prop-types';

import Location from './Location/Location';
import Temperature from './Temperature/Temperature';
import Weather from './Weather/Weather';
import Humidity from './Humidity/Humidity';
import Wind from './Wind/Wind';
import Calendar from './Calendar/Calendar';

import style from './FrontCard.scss';


class FrontCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.Card}>
        <div className={style.topBar}>
          <Location city={this.props.city} country={this.props.country} />
          <Temperature
            temperature={this.props.temperature}
            temperatureUnit={this.props.temperatureUnit}
          />
        </div>
        <Weather
          pod={this.props.pod}
          weatherCode={this.props.weatherCode}
          weatherDescription={this.props.weatherDescription}
        />
        <div className={style.bottomBar}>
          <Humidity humidity={this.props.humidity} />
          <Wind windspeed={this.props.windspeed} windspeedUnit={this.props.windspeedUnit} />
        </div>
        <Calendar lang={this.props.lang} />
      </div>
    );
  }
}

FrontCard.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  temperature: PropTypes.number,
  temperatureUnit: PropTypes.string,
  humidity: PropTypes.number,
  windspeed: PropTypes.number,
  windspeedUnit: PropTypes.string,
  pod: PropTypes.string,
  weatherCode: PropTypes.string,
  weatherDescription: PropTypes.string,
  lang: PropTypes.string,
};

FrontCard.defaultProps = {
  city: 'Undefined',
  country: 'Undefined',
  temperature: 0,
  temperatureUnit: null,
  humidity: 0,
  windspeed: 0,
  windspeedUnit: null,
  pod: null,
  weatherCode: null,
  weatherDescription: '---',
  lang: 'Undefined',
};

export default FrontCard;
