import React from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import style from './GoogleMap.scss';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        centerAroundCurrentLocation
        className={style.Map}
      >
        <Marker
          position={{
            lat: this.props.lat,
            lng: this.props.lng,
          }}
        />
      </Map >
    );
  }
}

MapContainer.propTypes = {
  google: PropTypes.object,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

MapContainer.defaultProps = {
  google: null,
  lat: 0,
  lng: 0,
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAE7-pQpL4gWJyPxKQpOeJmv-Sy5sMzxco',
})(MapContainer);
