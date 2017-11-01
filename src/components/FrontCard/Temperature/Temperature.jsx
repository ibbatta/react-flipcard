import React from 'react';
import PropTypes from 'prop-types';
import style from './Temperature.scss';
import celsiusImg from '../../../img/weather-icon/c.svg';
import fahrenheitImg from '../../../img/weather-icon/f.svg';
import defaultImg from '../../../img/weather-icon/thermometer.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: this.props.unit,
      temperature: this.props.temperature,
    };
  }

  componentWillMount() {
    this.getTemperatureUnit();
  }

  getTemperatureUnit() {
    switch (this.state.unit) {
      case 'c':
        this.state.img = celsiusImg;
        break;
      case 'f':
        this.state.img = fahrenheitImg;
        break;
      default:
        this.state.img = defaultImg;
        break;
    }
    return this.state.img;
  }

  render() {
    return (
      <div className={style.temperatureWrapper}>
        <span className={style.temperatureText}>
          {this.state.temperature}
        </span>
        <img className={style.temperatureIcon} src={this.state.img} alt="temperature-icon" />
      </div>
    );
  }
}

App.propTypes = {
  unit: PropTypes.string,
  temperature: PropTypes.number,
};

App.defaultProps = {
  unit: null,
  temperature: 0,
};

export default App;
