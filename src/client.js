import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import reducers from './reducers/index';
import routes from './routes';

const initialState = window.__INITIAL_STATE__;

console.log("initialState:", initialState);

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(promise)
);

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
