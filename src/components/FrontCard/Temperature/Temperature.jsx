import React from 'react';
import PropTypes from 'prop-types';
import style from './Temperature.scss';
import celsiusImg from '../../../img/weather-icon/c.svg';
import fahrenheitImg from '../../../img/weather-icon/f.svg';
import defaultImg from '../../../img/weather-icon/thermometer.svg';

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getTemperatureUnit() {
    let setImg;
    switch (this.props.temperatureUnit) {
      case 'c':
        setImg = celsiusImg;
        break;
      case 'f':
        setImg = fahrenheitImg;
        break;
      default:
        setImg = defaultImg;
        break;
    }
    return setImg;
  }

  render() {
    return (
      <div className={style.TemperatureWrapper}>
        <span className={style.TemperatureWrapper__temperatureText}>
          {this.props.temperature}
        </span>
        <img className={style.TemperatureWrapper__temperatureIcon} src={this.getTemperatureUnit()} alt="temperature-icon" />
      </div>
    );
  }
}

Temperature.propTypes = {
  temperature: PropTypes.number,
  temperatureUnit: PropTypes.string,
};

Temperature.defaultProps = {
  temperature: 0,
  temperatureUnit: null,
};

export default Temperature;
