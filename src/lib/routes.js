import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Login from '../login';

import store from './store';

export default (
  <Route path="/">
    <IndexRoute component={Login} />
  </Route>
);

