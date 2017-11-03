import React from 'react';
import PropTypes from 'prop-types';
import style from './Weather.scss';

import img1 from '../../../img/icons/1.svg';
import img3 from '../../../img/icons/3.svg';
import img4 from '../../../img/icons/4.svg';
import img5 from '../../../img/icons/5.svg';
import img7 from '../../../img/icons/7.svg';
import img8 from '../../../img/icons/8.svg';
import img9 from '../../../img/icons/9.svg';
import img10 from '../../../img/icons/10.svg';
import img11 from '../../../img/icons/11.svg';
import img14 from '../../../img/icons/14.svg';
import img15 from '../../../img/icons/15.svg';
import img18 from '../../../img/icons/18.svg';
import img19 from '../../../img/icons/19.svg';
import defaultImg from '../../../img/weather-icon/default.svg';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkWeatherIcon() {
    let weatherImg = defaultImg;
    const code = parseInt(this.props.weatherCode, 10);
    const weatherPod = this.props.pod;

    // TODO: refactory code weather and icons
    if (code === 800) {
      if (weatherPod === 'd') {
        weatherImg = img1;
      } else {
        weatherImg = img7;
      }
    }

    if (code >= 801 && code <= 803) {
      if (weatherPod === 'd') {
        weatherImg = img3;
      } else {
        weatherImg = img8;
      }
    }

    if ((code >= 230 && code <= 233) || code === 502) {
      weatherImg = img4;
    }

    if (code === 804) {
      weatherImg = img5;
    }

    if (code >= 700 && code <= 751) {
      weatherImg = img10;
    }

    if ((code >= 500 && code <= 501) || (code >= 511 && code <= 520) || code === 522) {
      if (weatherPod === 'd') {
        weatherImg = img9;
      } else {
        weatherImg = img18;
      }
    }

    if (code === 521) {
      weatherImg = img11;
    }

    if (code >= 200 && code <= 202) {
      weatherImg = img14;
    }

    if (code >= 611 && code <= 612) {
      weatherImg = img15;
    }

    if ((code >= 601 && code <= 602) || (code >= 622 && code <= 623)) {
      weatherImg = img19;
    }

    return weatherImg;
  }

  render() {
    return (
      <div className={style.weatherBar}>
        <div className={style.weatherIconWrapper}>
          <img className={style.weatherIcon} src={this.checkWeatherIcon()} alt="weather-icon" />
        </div>
        <div className={style.weatherText}>
          {this.props.weatherDescription}
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
  weatherDescription: 'undefined',
};

export default Weather;
