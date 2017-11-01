import React from 'react';
import PropTypes from 'prop-types';
import style from './Wind.scss';

class Wind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wind: this.props.wind,
    };
  }

  render() {
    return (
      <div className={style.windWrapper}>
        <span className={style.windText}>
          Velocità del vento
        </span>
        <span className={style.windText}>
          {this.state.wind}
        </span>
      </div>
    );
  }
}

Wind.propTypes = {
  wind: PropTypes.number,
};

Wind.defaultProps = {
  wind: 0,
};

export default Wind;
