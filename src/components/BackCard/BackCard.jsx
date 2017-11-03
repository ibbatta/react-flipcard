import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import style from './BackCard.scss';

class BackCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
    };
  }

  componentWillReceiveProps() {
    this.setState({
      lat: this.props.lat,
      lng: this.props.lng,
    });
  }

  componentDidUpdate() {
    this.initMap();
  }

  initMap() {
    console.log(`STATE: Lat ${this.state.lat} - Lng ${this.state.lng}`);
  }

  render() {
    return (
      <div className={classNames(style.Card, style.CardBack)}>
        <div id="map" className={style.CardBack__MapContainer}>&nbsp;</div>
      </div>
    );
  }
}

BackCard.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

BackCard.defaultProps = {
  lat: 0,
  lng: 0,
};

export default BackCard;
