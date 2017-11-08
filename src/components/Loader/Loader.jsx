import React from 'react';
import style from './Loader.scss';

const Loader = () => (
  <div className={style.LoaderWrapper}>
    <span className={style.LoaderWrapper__Element}>●</span>
    <span className={style.LoaderWrapper__Element}>●</span>
    <span className={style.LoaderWrapper__Element}>●</span>
  </div>
);

export default Loader;
