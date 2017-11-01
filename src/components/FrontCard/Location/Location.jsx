import React from 'react';
import PropTypes from 'prop-types';
import style from './Location.scss';
import pinImg from '../../../img/pin.svg';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
    };
  }

  render() {
    return (
      <div className={style.locationWrapper}>
        <img className={style.locationIcon} src={pinImg} alt="location-icon" />
        <span className={style.locationText}>{this.state.location}</span>
      </div>
    );
  }
}

Location.propTypes = {
  location: PropTypes.string,
};

Location.defaultProps = {
  location: 'Undefined, World',
};

export default Location;
