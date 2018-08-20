import * as React from 'react';
import App from './Components/App';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';

import './index.scss';

render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById('root'),
);

declare var module: any;

if (module.hot) {
  module.hot.accept('./component/App', () => {
    const App = require('./components/App').default;  // tslint:disable-line
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
