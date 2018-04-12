import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';
// import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    // this.handleClick = this.handleClick.bind(this)
  }
  // handleClick = () => {
  //   axios.get('/v2/book/1220562').then((res) => {
  //     console.log(res, 2)
  //   })
  //   fetch('/v2/book/1220562')
  //     .then(function(res) {
  //         return res.json()
  //     })
  //     .then(res => console.log(res, 3))
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
