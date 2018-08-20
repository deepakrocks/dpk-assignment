import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import reducers from '../reducers/Reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reduxThunk from 'redux-thunk';

export const history = createBrowserHistory();

declare var module: any;
declare var window: any;

function configureStoreDev(initialState?: any) {
  // add support for Redux dev tools
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    connectRouter(history)(reducers),
    initialState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        reduxThunk,
        // other middleware..
      )),
  );

  if (module.hot) {
    // tslint:disable-next-line
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore = configureStoreDev;

export default configureStore;
