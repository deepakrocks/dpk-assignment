import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader';
import AppointmentContainer from '../containers/AppointmentContainers';
import configureStore, { history } from '../store/ConfigureStore';

const store = configureStore();

class App extends React.Component {
  public render() {
    return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={AppointmentContainer}/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
  }
}

export default hot(module)(App);
