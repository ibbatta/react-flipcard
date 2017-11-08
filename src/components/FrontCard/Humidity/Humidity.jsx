import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../Loader/Loader';
import style from './Humidity.scss';

class Humidity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.humidityWrapper}>
        <span className={style.humidityText}>
          Percentuale umidità
        </span>
        <span className={style.humidityText}>
          {!this.props.humidity ? <Loader /> : `${this.props.humidity}%`}
        </span>
      </div>
    );
  }
}

Humidity.propTypes = {
  humidity: PropTypes.number,
};

Humidity.defaultProps = {
  humidity: null,
};

export default Humidity;
