import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../Loader/Loader';
import style from './Wind.scss';

class Wind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  convertWindSpeed() {
    const mphRatio = 2.23694;
    return (this.props.windspeed * mphRatio).toFixed(2);
  }

  render() {
    return (
      <div className={style.windWrapper}>
        <span className={style.windText}>
          Velocità del vento
        </span>
        <span className={style.windText}>
          {!this.props.windspeed ? <Loader /> : `${this.convertWindSpeed()}${this.props.windspeedUnit}`}
        </span>
      </div>
    );
  }
}

Wind.propTypes = {
  windspeed: PropTypes.number,
  windspeedUnit: PropTypes.string,
};

Wind.defaultProps = {
  windspeed: null,
  windspeedUnit: null,
};

export default Wind;
