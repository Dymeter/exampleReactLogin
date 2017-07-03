import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Login from '../login';


export default (
  <Route path="/">
    <IndexRoute component={Login} />
  </Route>
);

