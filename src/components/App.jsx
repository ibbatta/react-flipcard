import React from 'react';
import Card from './Card/Card';
import style from './App.scss';

const App = () => (
  <div className={style.AppContainer}>
    <div className={style.AppContainer__item}>
      <Card />
    </div>
  </div>
);

module.exports = App;
