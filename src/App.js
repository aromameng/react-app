import React, { Component } from 'react';

import { Route, Switch, Redirect } from "react-router-dom";
import Home from './views/home'
import ShopCart from './views/shopCart'
import My from './views/my'
import Classify from './views/classify'
import Sign from './views/sign'
import GoodDetail from './views/goodDetail'

import router from './utils/route'

class App extends Component {
  render() {
    return (
        <div className='container'>
            <Switch>
              <Redirect exact from="/" to="/home" />          
              <Route path="/home"  render={ (props)=> <Home route={router['home']} {...props} /> }></Route>
              <Route path="/my" render={ (props)=> <My route={router['my']} {...props} /> } ></Route>
              <Route path="/classify" render={ (props)=> <Classify route={router['classify']} {...props} /> } ></Route>
              <Route path="/shopcart" render={ (props)=> <ShopCart route={router['shopcart']} {...props} /> }></Route>             
              <Route path="/sign"  render={ (props)=> <Sign route={router['sign']} {...props} /> } ></Route>
              <Route path="/good-detail/:id"  render={ (props)=> <GoodDetail route={router['goodDetail']} {...props} /> } ></Route>
            </Switch>       
        </div>        
    );
  }
}

export default App;
