import React from 'react';
// import PropTypes from 'prop-types';
import style from './Card.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // location: this.props.location,
    };
  }
  componentDidMount() {
    this.state = null;
  }

  getLocation() {
    // call html5 api to get user location and set state
    this.setState({});
  }

  render() {
    return (
      <div className={style.Card}>
        Hello
      </div>
    );
  }
}

/* App.propTypes = {
  location: PropTypes.string,
};

App.defaultProps = {
  location: 'Rome, Italy',
}; */

export default App;
