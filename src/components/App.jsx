import React from 'react';
import FrontCard from './FrontCard/FrontCard';
import style from './App.scss';

const App = () => (
  <div className={style.AppContainer}>
    <div className={style.AppContainer__item}>
      <FrontCard />
    </div>
  </div>
);

module.exports = App;
