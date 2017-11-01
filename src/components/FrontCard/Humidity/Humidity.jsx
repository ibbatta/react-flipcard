import React from 'react';
import PropTypes from 'prop-types';
import style from './Humidity.scss';

class Humidity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      humidity: this.props.humidity,
    };
  }

  render() {
    return (
      <div className={style.humidityWrapper}>
        <span className={style.humidityText}>
          Percentuale umidità
        </span>
        <span className={style.humidityText}>
          {this.state.humidity}
        </span>
      </div>
    );
  }
}

Humidity.propTypes = {
  humidity: PropTypes.number,
};

Humidity.defaultProps = {
  humidity: 0,
};

export default Humidity;
