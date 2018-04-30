import React, { Component } from 'react';

import { Route, Switch, Redirect } from "react-router-dom";
import Home from './views/home'
import ShopCart from './views/shopCart'
import My from './views/my'
import Classify from './views/classify'
import Sign from './views/sign'

import Header from './components/Header'
import router from './utils/route'

class App extends Component {
  render() {
    return (
        <div className='container'>
          <Header {...this.props} back={false} title='hello' />
          <div className='view_content'>  
            <Switch>
              <Redirect exact from="/" to="/home"/>          
              <Route path="/home"  render={ (props)=> <Home route={router['home']} {...props} /> }></Route>
              <Route path="/my" render={ (props)=> <My route={router['my']} {...props} /> } ></Route>
              <Route path="/classify" render={ (props)=> <Classify route={router['classify']} {...props} /> } ></Route>
              <Route path="/shopcart" render={ (props)=> <ShopCart route={router['shopcart']} {...props} /> }></Route>             
              <Route path="/sign"  render={ (props)=> <Sign route={router['sign']} {...props} /> } ></Route>
            </Switch>
          </div>       
        </div>        
    );
  }
}

export default App;
