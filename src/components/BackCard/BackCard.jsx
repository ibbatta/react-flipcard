import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import GoogleMap from './GoogleMap/GoogleMap';
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

  render() {
    return (
      <div className={classNames(style.Card, style.CardBack)}>
        <GoogleMap lat={this.state.lat} lng={this.state.lng} />
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
