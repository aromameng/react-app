import React, { Component } from 'react';
// import { Button } from 'antd-mobile'
import './common.less';
// import logo from '../assets/img/logo.svg';
import Footer from '../components/Footer'
import Header from '../components/Header'
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
          <Header {...this.props} back={false} title='购物车' />
          <Empty />
          <Footer {...this.props} />
        </div>      
      )
    }
    // 不为空
    return (
      <div className='view_shop'>     
        <Header {...this.props} back={false} title='hello' />
        <Footer {...this.props} />
      </div>
    )
  }
}

export default ShopCart;