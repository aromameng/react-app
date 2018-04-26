import React, { Component } from 'react';

import './test.less';
import { Route, Switch } from "react-router-dom";
import Home from './views/home'
import About from './views/about'
import News from './views/news'

import Header from './components/Header'

class App extends Component {
  render() {
    return (
        <div className='container'>
          <Header title='hello' />
          <Switch>
            <Route path="/news" component={News}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>        
    );
  }
}

export default App;
