import React, { Component } from 'react';

import { Route, Switch, Redirect, Router } from "react-router-dom";
import Home from './views/home'
import Shop from './views/shop'
import My from './views/my'
import Classify from './views/classify'
import Sign from './views/sign'

import Header from './components/Header'
import Footer from './components/Footer'

import route from './utils/route'

class App extends Component {
  render() {
    return (
        <div className='container'>
          <Header {...this.props} route={route} back={false} title='hello' />
          <div className='view_content'>  
            <Switch>
              <Redirect exact from="/" to="/home"/>
              <Route path="/home" component={Home}></Route>
              <Route path="/my" component={My}></Route>
              <Route path="/classify" component={Classify}></Route>
              <Route path="/shop" component={Shop}></Route>             
              <Route path="/sign" component={Sign}></Route>             
            </Switch>
          </div>
          <Footer {...this.props} route={route} />
        </div>        
    );
  }
}

export default App;
