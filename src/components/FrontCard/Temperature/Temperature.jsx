import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../Loader/Loader';
import style from './Temperature.scss';
import temperatureCelsiusImg from '../../../img/weather-icon/c.svg';
import temperatureFahrenheitImg from '../../../img/weather-icon/f.svg';
import temperaturePlaceholderImg from '../../../img/weather-icon/thermometer.svg';

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getTemperatureUnit() {
    if (this.props.temperatureUnit.toLowerCase() === 'c') return temperatureCelsiusImg;
    if (this.props.temperatureUnit.toLowerCase() === 'f') return temperatureFahrenheitImg;
    return temperaturePlaceholderImg;
  }

  render() {
    return (
      <div className={style.TemperatureWrapper}>
        <span className={style.TemperatureWrapper__temperatureText}>
          {!this.props.temperature ? <Loader /> : this.props.temperature}
        </span>
        <img
          className={style.TemperatureWrapper__temperatureIcon}
          src={this.getTemperatureUnit()}
          alt="temperature-icon"
        />
      </div>
    );
  }
}

Temperature.propTypes = {
  temperature: PropTypes.number,
  temperatureUnit: PropTypes.string,
};

Temperature.defaultProps = {
  temperature: null,
  temperatureUnit: null,
};

export default Temperature;
