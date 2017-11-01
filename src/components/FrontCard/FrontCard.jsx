import React from 'react';

import Location from './Location/Location';
import Temperature from './Temperature/Temperature';
import Weather from './Weather/Weather';
import Humidity from './Humidity/Humidity';
import Wind from './Wind/Wind';
import Calendar from './Calendar/Calendar';

import style from './FrontCard.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={style.Card}>
        <div className={style.topBar}>
          <Location />
          <Temperature />
        </div>
        <Weather />
        <div className={style.bottomBar}>
          <Humidity />
          <Wind />
        </div>
        <Calendar />
      </div>
    );
  }
}

export default App;
