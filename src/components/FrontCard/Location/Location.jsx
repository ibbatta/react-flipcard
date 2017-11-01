import React from 'react';
import PropTypes from 'prop-types';
import style from './Location.scss';
import pinImg from '../../../img/pin.svg';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.locationWrapper}>
        <img className={style.locationIcon} src={pinImg} alt="location-icon" />
        <span className={style.locationText}>{this.props.city}, {this.props.country}</span>
      </div>
    );
  }
}

Location.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
};

Location.defaultProps = {
  city: 'Undefined',
  country: 'Undefined',
};

export default Location;
