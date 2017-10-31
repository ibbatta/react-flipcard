import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Card.scss';
import pinImg from '../../img/pin.svg';
import celsiusImg from '../../img/weather-icon/c.svg';

import img from '../../img/weather-icon/day.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // location: this.props.location,
    };
  }
  componentDidMount() {
    this.state = null;
  }

  getLocation() {
    // call html5 api to get user location and set state
    this.setState({});
  }

  render() {
    return (
      <div className={style.Card}>
        <div className={style.topBar}>
          <div className={style.locationWrapper}>
            <img className={style.locationIcon} src={pinImg} alt="location-icon" />
            <span className={style.locationText}>Rome, Italy</span>
          </div>
          <div className={style.temperatureWrapper}>
            <span className={style.temperatureText}>
              54
            </span>
            <img className={style.temperatureIcon} src={celsiusImg} alt="temperature-icon" />
          </div>
        </div>
        <div className={style.weatherBar}>
          <div className={style.weatherIconWrapper}>
            <img className={style.weatherIcon} src={img} alt="weather-icon" />
          </div>
          <div className={style.weatherText}>
            Sunny
          </div>
        </div>
        <div className={style.bottomBar}>
          <div className={style.humidityWrapper}>
            <span className={style.humidityText}>
              Percentuale umidità
            </span>
            <span className={style.humidityText}>
              48%
            </span>
          </div>
          <div className={style.windWrapper}>
            <span className={style.windText}>
              Velocità del vento
            </span>
            <span className={style.windText}>
              46 mph
            </span>
          </div>
        </div>
        <div className={style.calendarBar}>
          <div className={style.calendarDay}>
            <span className={style.calendarText}>
              Mon
            </span>
          </div>
          <div className={style.calendarDay}>
            <span className={style.calendarText}>
              Tue
            </span>
          </div>
          <div className={style.calendarDay}>
            <span className={style.calendarText}>
              Wen
            </span>
          </div>
          <div className={classNames(style.calendarDay, style.actual)}>
            <span className={style.calendarText}>
              Thu
            </span>
          </div>
          <div className={style.calendarDay} >
            <span className={style.calendarText}>
              Fri
            </span>
          </div>
          <div className={style.calendarDay}>
            <span className={style.calendarText}>
              Sat
            </span>
          </div>
          <div className={style.calendarDay}>
            <span className={style.calendarText}>
              Sun
            </span>
          </div>
        </div>
      </div >
    );
  }
}

/* App.propTypes = {
          location: PropTypes.string,
};

App.defaultProps = {
          location: 'Rome, Italy',
}; */

export default App;
