import React from 'react';
import PropTypes from 'prop-types';
import style from './Card.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div className={style.Card}>
        <h1>Hello, {this.props.name}!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
};

App.defaultProps = {
  name: '',
};

export default App;
