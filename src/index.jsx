import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import DarkSkyApi from 'dark-sky-api';
import App from './components/App';
import './index.scss';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App);

/* DarkSkyApi.apiKey = '45c55c2b0c135dbba2bcbb2ef22a9d0f';
DarkSkyApi.units = 'si';
DarkSkyApi.language = 'it';

const responseUnits = DarkSkyApi.getResponseUnits();
console.log('UNIT', responseUnits);

DarkSkyApi.loadForecast()
  .then(result => console.log(result)); */

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App); });
}

