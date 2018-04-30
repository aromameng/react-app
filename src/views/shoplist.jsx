import React, { Component } from 'react';
import { Button } from 'antd-mobile'
import './shop.less';
import Footer from '../components/Footer'

class ShopList extends Component{
  componentWillMount(){
    // console.log('-----',this.props)
  }
  render() {
    return (
      <div className='view_shop empty'>
        <img className='pic' src={require('../assets/img/empty_cart.png')} />
        <p>购物车还是空的</p>
        <Button className='btn' type="primary">去逛逛</Button>
        <Footer {...this.props} />
      </div>
    )
  }
}

export default ShopList;