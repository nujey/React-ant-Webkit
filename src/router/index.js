import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import app from '../pages/app/App'
import home from '../pages/home/home'

export default class RouteConfig extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component = {home} />
          <Redirect to="/" />
        </Switch>  
      </BrowserRouter>
    )
  }
}