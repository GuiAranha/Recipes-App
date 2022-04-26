import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login';
import Foods from '../pages/Foods';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/foods" component={ Foods } />
    </Switch>
  );
}

export default Routes;
