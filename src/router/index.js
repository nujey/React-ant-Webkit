import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import home from '../pages/home/home'
import coopera from '../pages/cooperation/coopera'

export default class RouteConfig extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component = {home} />
          <Route path="/coopera" component = {coopera} />
          <Redirect to="/" />
        </Switch>  
      </BrowserRouter>
    )
  }
}