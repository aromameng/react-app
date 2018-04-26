import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';

class About extends Component{
  componentWillMount(){
    console.log(this.props)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a>hello world !</a>
      </div>
    )
  }
}

export default About;