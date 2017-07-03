import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import store from './store';
import '../index';

// const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
