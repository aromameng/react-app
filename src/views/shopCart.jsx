import React, { Component } from 'react';
// import { Button } from 'antd-mobile'
import './shop.less';
// import logo from '../assets/img/logo.svg';
import Footer from '../components/Footer'
import Empty from '../components/Empty'

class ShopCart extends Component{
  componentWillMount(){
    // console.log('-----',this.props)
  }
  render() {
    const list = []
    // 购物车为空
    if(!list.length){
      return (
        <div>
          <Empty />
          <Footer {...this.props} />
        </div>      
      )
    }
    // 不为空
    return (
      <div className='view_shop'>     
        <Footer {...this.props} />
      </div>
    )
  }
}

export default ShopCart;