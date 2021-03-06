import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import Dash from '../dash';
import NoMatch from '../nomatch';

export default () => (
  <Switch>
    <Route exact path='/home' component={Home} />
    <Route path='/dash' component={Dash} />
    <Route component={NoMatch} />
  </Switch>
);