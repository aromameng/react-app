import React, { Component } from 'react';

import { Route, Switch } from "react-router-dom";
import Container from '../App'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Container}></Route>
      </Switch>     
    );
  }
}

export default App;
