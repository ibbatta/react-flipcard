import React from 'react';
import classNames from 'classnames';
import style from './BackCard.scss';


class BackCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={classNames(style.Card, style.CardBack)}>
        <h1 className={style.prova}>Ciao</h1>
      </div>
    );
  }
}

export default BackCard;
