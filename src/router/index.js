import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import home from '../pages/home/home'
import dragDemo from '../pages/animation-demo/drag-demo/drag-demo'

export default class RouteConfig extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component = {home} />
          <Route path="/drag-demo" component = {dragDemo} />
          <Redirect to="/" />
        </Switch>  
      </BrowserRouter>
    )
  }
}