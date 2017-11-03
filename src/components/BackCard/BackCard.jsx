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
    console.log('WILL RECEIVE PROPS');
    console.log(`PROPS: Lat ${this.props.lat} - Lng ${this.props.lng}`);
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
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8,
    });
    console.log(map);
  }

  render() {
    return (
      <div className={classNames(style.Card, style.CardBack)}>
        <div id="map" className={style.CardBack__MapContainer} />
        <script async defer src={`https://maps.googleapis.com/maps/api/js?sensor=false&key=${this.props.apiKey}callback=${this.initMap}`} />
      </div>
    );
  }
}

BackCard.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  apiKey: PropTypes.string,
};

BackCard.defaultProps = {
  lat: 0,
  lng: 0,
  apiKey: '',
};

export default BackCard;
