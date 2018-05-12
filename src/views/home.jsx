import React, { Component } from 'react';
import Footer from '../components/Footer'
import Swiper from '../components/Swiper'
import Header from '../components/Header'

import HomeNav from '../components/HomeNav'
import GoodList from '../components/GoodList'

import goods from '../data/shop'

import './common.less'


const list =[{
  title:'美丽',
  id:1,
  pic: 'http://img3.imgtn.bdimg.com/it/u=859170095,620911882&fm=27&gp=0.jpg',
  url:'/sign'
},{
  title:'美丽2',
  id:2,
  pic: 'http://img2.imgtn.bdimg.com/it/u=2111979637,116752699&fm=27&gp=0.jpg',
  url:'/sign'
},{
  title:'美丽2',
  id:3,
  pic: 'http://img5.imgtn.bdimg.com/it/u=3180694005,1343380476&fm=27&gp=0.jpg',
  url:'/sign'
}]

class Home extends Component{
  render() {
    return (
      <div className='view_home'>
        <Header {...this.props} back={false} title='首页' />
        <Swiper list={list} />
        <HomeNav />
        <GoodList list={goods} />
        <Footer {...this.props} />
      </div>
    )
  }
}

export default Home;