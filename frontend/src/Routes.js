import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'views/home/Home';
import UseTellor from 'views/usetellor/UseTellor';


const Routes = () => (
  <Switch>
    <Route
      path="/"
      exact
      render={() => 
        <Home />} />
    <Route
      path="/usetellor"
      exact
      render={() => 
        <UseTellor />} />
  </Switch>
);

export default Routes;
