import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


import app from '../pages/app/App'

export default class RouteConfig extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component = {app} />
          <Redirect to="/" />
        </Switch>  
      </BrowserRouter>
    )
  }
}