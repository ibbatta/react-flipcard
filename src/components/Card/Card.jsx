import React from 'react';
// import PropTypes from 'prop-types';
import style from './Card.scss';
import location from '../../img/location-placeholder.svg';
import weather from '../../img/weather-placeholder.svg';

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
            <img className="locationIcon" src={location} alt="location-icon" />
            <span className="locationText">Rome, Italy</span>
          </div>
          <div className={style.temperatureWrapper}>
            <span className="temperatureText">
              54°c
            </span>
          </div>
        </div>
        <div className="weatherContent">
          <div className="weatherText">
            Sunny
          </div>
          <div className="weatherIconWrapper">
            <img className="weatherIcon" src={weather} alt="weather-icon" />
          </div>
        </div>
        <div className="bottomBar">
          <div className="humidity">
            48% umidità
          </div>
          <div className="wind">
            46 nodi
          </div>
        </div>
        <div className="calendarBar">
          <div className="calendarDay">Mon</div>
          <div className="calendarDay">Tue</div>
          <div className="calendarDay">Wed</div>
          <div className="calendarDay">Thu</div>
          <div className="calendarDay">Fri</div>
          <div className="calendarDay">Sat</div>
          <div className="calendarDay">Sun</div>
        </div>
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
