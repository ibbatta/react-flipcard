import React from 'react';
// import PropTypes from 'prop-types';
import style from './Card.scss';
import pinImg from '../../img/pin.svg';
import celsiusImg from '../../img/weather-icon/c.svg';

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
          <div className={style.weatherText}>
            Sunny
          </div>
          <div className={style.weatherIconWrapper}>
            <img className={style.weatherIcon} src="" alt="weather-icon" />
          </div>
        </div>
        <div className={style.bottomBar}>
          <div className={style.humidityWrapper}>
            <span className={style.humidityText}>
              Percentuale di umidità
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
        {/* <div className="calendarBar">
          <div className="calendarDay">
            <span className="calendarText">
              Mon
            </span>
          </div>
          <div className="calendarDay">
            <span className="calendarText">
              Tue
            </span>
          </div>
          <div className="calendarDay">
            <span className="calendarText">
              Wed
            </span>
          </div>
          <div className="calendarDay">
            <span className="calendarText">
              Thu
            </span>
          </div>
          <div className="calendarDay">
            <span className="calendarText">
              Fri
            </span>
          </div>
          <div className="calendarDay">
            <span className="calendarText">
              Sat
            </span>
          </div>
          <div className="calendarDay">
            <span className="calendarText">
              Sun
            </span>
          </div>
        </div> */}
      </div>
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
